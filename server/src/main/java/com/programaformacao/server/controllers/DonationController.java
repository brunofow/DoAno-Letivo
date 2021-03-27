package com.programaformacao.server.controllers;

import java.util.List;

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

import com.programaformacao.server.controllers.exception.DataBaseException;
import com.programaformacao.server.controllers.exception.ResourceNotFoundException;
import com.programaformacao.server.models.Donation;
import com.programaformacao.server.repositories.DonationRepository;

@RestController
@RequestMapping("/donations")
public class DonationController {

  @Autowired
  private DonationRepository repository;

  @GetMapping
  public ResponseEntity<List<Donation>> GetAll() {
    return ResponseEntity.ok(repository.findAll());
  }

  @PostMapping
  public ResponseEntity<Donation> Donation(@RequestBody Donation donation) {
    return ResponseEntity.ok(repository.save(donation));
  }
    @PutMapping
	public ResponseEntity<Donation> put (@RequestBody Donation donation){
		
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(donation));
	}
		
	
	@DeleteMapping("/{id}")
	public void delete (@PathVariable long id) {
		try {
			repository.deleteById(id);		
		}catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(id);
		}catch(DataIntegrityViolationException e) {
			throw new DataBaseException(e.getMessage());
		}
	
		
	}
	
	}

