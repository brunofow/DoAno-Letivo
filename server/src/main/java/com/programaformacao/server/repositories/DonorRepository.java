package com.programaformacao.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.programaformacao.server.models.Donor;

import java.util.Optional;

public interface DonorRepository extends JpaRepository<Donor, Long > {
  Donor findByEmail(String email);
}
