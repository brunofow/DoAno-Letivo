package com.programaformacao.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.programaformacao.server.models.Students;

public interface StudentsRepository extends JpaRepository<Students, Long> {
  public Iterable<Students> findByDonatedFalse(); 
}
