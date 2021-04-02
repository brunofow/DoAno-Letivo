package com.programaformacao.server.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import com.programaformacao.server.models.*;
import com.programaformacao.server.repositories.KitRepository;
import com.programaformacao.server.repositories.ParentRepository;
import com.programaformacao.server.repositories.SchoolRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.programaformacao.server.repositories.StudentsRepository;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/students")
public class StudentsController {

	private static String UPLOADED_FOLDER = "src/main/uploads/";
	
	
	@Autowired
	private StudentsRepository repository;

	@Autowired
	private ParentRepository parentRepository;

	@Autowired
	private SchoolRepository schoolRepository;

	@Autowired
	private KitRepository kitRepository;

	
	@GetMapping()
	public ResponseEntity<List<Students>> getAll(){
		return ResponseEntity.ok(repository.findAll());	
	}

	@GetMapping("/parent/{parent_id}")
	public ResponseEntity<List<Students>> getChildrens(@PathVariable Long parent_id) {
			Parent parent = parentRepository.findById(parent_id)
							.orElse(null);
			return ResponseEntity.ok(parent.getStudents());

	}
	
	
	@PostMapping("/{id}")
	public ResponseEntity<?> post (@ModelAttribute StudentForm form, @PathVariable Long id, @RequestParam("avatar") MultipartFile file){
		Students student = new Students();
		try {
			UUID uuid = UUID.randomUUID();
			String url = uuid + file.getOriginalFilename();
			byte[] bytes = file.getBytes();
			Path path = Paths.get(UPLOADED_FOLDER + uuid + file.getOriginalFilename());
			Files.write(path, bytes);
			student.setAvatar(url);
		} catch (IOException e) {
			e.printStackTrace();

			return ResponseEntity.ok("Erro ao fazer upload da imagem");
		}
		Parent parent = parentRepository.findById(id)
						.orElse(null);
		School school = schoolRepository.findById(form.getSchool_id())
						.orElse(null);
		SchoolKit kit = kitRepository.findById(form.getKit_id())
						.orElse(null);
		student.setName(form.getName());
		student.setDescription(form.getDescription());
		student.setEnrollment(form.getEnrollment());
		student.setParent(parent);
		student.setSchool(school);
		student.setKit(kit);
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(student));
	}
	
	
	@PutMapping
	public ResponseEntity<Students> put (@RequestBody Students name){
		
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(name));
	}
		
	
	@DeleteMapping("/{id}")
	public void delete (@PathVariable long id) {
		repository.deleteById(id);		
	}
	}