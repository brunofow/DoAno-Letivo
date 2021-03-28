package com.programaformacao.server.repositories;

import com.programaformacao.server.models.SchoolKit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KitRepository extends JpaRepository<SchoolKit, Long> {
  SchoolKit findByTitle(String title);
}
