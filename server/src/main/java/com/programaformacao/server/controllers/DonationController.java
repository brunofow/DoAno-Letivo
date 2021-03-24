package com.programaformacao.server.controllers;

import com.programaformacao.server.models.Donation;
import com.programaformacao.server.repositories.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/donations")
public class DonationController {

  @Autowired
  private DonationRepository repository;

  @GetMapping
  public ResponseEntity<?> index() {
    return ResponseEntity.ok(repository.findAll());
  }

  @PostMapping
  public ResponseEntity<?> create(@RequestBody Donation donation) {
    return ResponseEntity.ok(repository.save(donation));
  }

}
