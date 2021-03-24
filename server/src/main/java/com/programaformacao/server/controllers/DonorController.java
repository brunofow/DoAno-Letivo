package com.programaformacao.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.programaformacao.server.repositories.DonorRepository;

@RestController
@RequestMapping(value = "/donor")
public class DonorController {
	@Autowired
	private DonorRepository repository;

	@GetMapping
	private ResponseEntity<List<?>> index(){
		List<?>list = repository.findAll();
		return ResponseEntity.ok(repository.findAll());	
	}
}
