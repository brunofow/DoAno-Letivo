package com.programaformacao.server.controllers;

import java.util.List;

import com.programaformacao.server.models.*;
import com.programaformacao.server.repositories.KitRepository;
import com.programaformacao.server.repositories.ParentRepository;
import com.programaformacao.server.repositories.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.programaformacao.server.repositories.StudentsRepository;

@RestController
@RequestMapping("/students")
public class StudentsController {
	
	
	@Autowired
	private StudentsRepository repository;

	@Autowired
	private ParentRepository parentRepository;

	@Autowired
	private SchoolRepository schoolRepository;

	@Autowired
	private KitRepository kitRepository;
	
	
	@GetMapping
	public ResponseEntity<List<Students>> GetAll(){
		
		return ResponseEntity.ok(repository.findAll());	
	}		
	
	
	@PostMapping("/{id}")
	public ResponseEntity<Students> post (@RequestBody StudentForm form, @PathVariable Long id){
		Parent parent = parentRepository.findById(id)
						.orElse(null);
		School school = schoolRepository.findById(form.getSchool_id())
						.orElse(null);
		SchoolKit kit = kitRepository.findById(form.getKit_id())
						.orElse(null);
		Students student = new Students();
		student.setName(form.getName());
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