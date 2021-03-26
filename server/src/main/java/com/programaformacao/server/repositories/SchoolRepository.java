package com.programaformacao.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.programaformacao.server.models.School;

public interface SchoolRepository extends JpaRepository<School, Long> {

  School findByEmail(String email);
}
