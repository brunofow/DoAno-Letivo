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

import com.programaformacao.server.models.Donation;
import com.programaformacao.server.models.Donor;
import com.programaformacao.server.models.Students;
import com.programaformacao.server.repositories.DonationRepository;
import com.programaformacao.server.repositories.DonorRepository;
import com.programaformacao.server.repositories.StudentsRepository;

@RestController
@RequestMapping("/donations")
public class DonationController {

  @Autowired
  private DonationRepository repository;

  @Autowired
	private DonorRepository donorRepository;
  
  @Autowired
  private StudentsRepository studentsRepository;

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
		Students student = donation.getStudent();
		student.setDonated(true);
		studentsRepository.save(student);
		dbDonation.setStudent(student);
		
    return ResponseEntity.ok(repository.save(dbDonation));
  }
    @PutMapping
	public ResponseEntity<Donation> put (@RequestBody Donation donation){
		
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(donation));
	}
		
	
	@DeleteMapping("/{id}")
	public void delete (@PathVariable long id) {
		repository.deleteById(id);				
	}
	}

