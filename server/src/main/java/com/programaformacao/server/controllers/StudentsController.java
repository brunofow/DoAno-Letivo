package com.programaformacao.server.controllers;

import java.util.List;

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

import com.programaformacao.server.models.Students;
import com.programaformacao.server.repositories.StudentsRepository;

@RestController
@RequestMapping("/students")
public class StudentsController {
	
	
	@Autowired
	private StudentsRepository repository;	
	
	
	@GetMapping
	public ResponseEntity<List<Students>> GetAll(){
		
		return ResponseEntity.ok(repository.findAll());	
	}		
	
	
	@PostMapping
	public ResponseEntity<Students> post (@RequestBody Students name){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(name));
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