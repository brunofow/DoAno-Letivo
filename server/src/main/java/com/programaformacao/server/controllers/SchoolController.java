package com.programaformacao.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
}
