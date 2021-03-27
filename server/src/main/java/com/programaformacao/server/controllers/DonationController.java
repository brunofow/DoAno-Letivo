package com.programaformacao.server.controllers;

import java.util.List;
import java.util.Optional;

import com.programaformacao.server.models.Donor;
import com.programaformacao.server.repositories.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.programaformacao.server.controllers.exception.DataBaseException;
import com.programaformacao.server.controllers.exception.ResourceNotFoundException;
import com.programaformacao.server.models.Donation;
import com.programaformacao.server.repositories.DonationRepository;

@RestController
@RequestMapping("/donations")
public class DonationController {

  @Autowired
  private DonationRepository repository;

  @Autowired
	private DonorRepository donorRepository;

  @GetMapping
  public ResponseEntity<List<Donation>> GetAll() {
    return ResponseEntity.ok(repository.findAll());
  }

  @PostMapping("/{id}")
  public ResponseEntity<?> Donation(@RequestBody Donation donation, @PathVariable Long id) {
		Donor donor = donorRepository.findById(id)
						.orElse(null);
		Donation dbDonation = new Donation();
		dbDonation.setDescription(donation.getDescription());
		dbDonation.setDonor(donor);
    return ResponseEntity.ok(repository.save(dbDonation));
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

