package com.programaformacao.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
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

import com.programaformacao.server.models.Donor;
import com.programaformacao.server.repositories.DonorRepository;

@RestController
@RequestMapping("/donors")
public class DonorController {
	@Autowired
	private DonorRepository repository;

	
	@GetMapping()
	public ResponseEntity<List<Donor>> getAll() {
	    return ResponseEntity.ok(repository.findAll());
	  }

	  public ResponseEntity<Donor> create(@RequestBody Donor dono) {
	    return ResponseEntity.ok(repository.save(dono));
	  }
	  
	@PutMapping
	public ResponseEntity<Donor> update(@RequestBody Donor donor){
		
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(donor));
	}
		
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		try {
			repository.deleteById(id);		
		}catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(id);
		}catch(DataIntegrityViolationException e) {
			throw new DataBaseException(e.getMessage());
		}
	}

	}