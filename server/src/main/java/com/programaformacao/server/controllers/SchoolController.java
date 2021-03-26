package com.programaformacao.server.controllers;

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

import com.programaformacao.server.models.School;
import com.programaformacao.server.repositories.SchoolRepository;

@RestController
@RequestMapping("/schools")
public class SchoolController {
	@Autowired
	private SchoolRepository repository;
	@GetMapping()
	public ResponseEntity<?> index() {
	    return ResponseEntity.ok(repository.findAll());
	  }

	  @PostMapping
	  public ResponseEntity<?> create(@RequestBody School school) {
	    return ResponseEntity.ok(repository.save(school));
	}
	  @PutMapping
		public ResponseEntity<School> put (@RequestBody School school){
			
			return ResponseEntity.status(HttpStatus.OK).body(repository.save(school));
		}
			
		
		@DeleteMapping("/{id}")
		public void delete (@PathVariable long id) {
			
			repository.deleteById(id);
			
		}

	}

