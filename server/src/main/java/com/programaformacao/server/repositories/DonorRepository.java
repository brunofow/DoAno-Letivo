package com.programaformacao.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.programaformacao.server.models.Donor;

public interface DonorRepository extends JpaRepository<Donor, Long > {

}
