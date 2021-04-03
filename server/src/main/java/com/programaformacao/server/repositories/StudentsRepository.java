package com.programaformacao.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.programaformacao.server.models.Students;
import org.springframework.data.jpa.repository.Query;

public interface StudentsRepository extends JpaRepository<Students, Long> {
  public Iterable<Students> findByDonatedFalse();

  @Query( value = "SELECT * FROM students WHERE kit_id = ?1 AND donated = false;", nativeQuery = true)
  public Iterable<Students> findByKitAndDonated(Long id);
}
