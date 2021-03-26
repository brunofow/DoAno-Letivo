package com.programaformacao.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.programaformacao.server.models.Parent;

public interface ParentRepository extends JpaRepository<Parent, Long>{

  Parent findByEmail(String email);
}
