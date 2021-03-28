package com.programaformacao.server.controllers;

import com.programaformacao.server.models.SchoolKit;
import com.programaformacao.server.repositories.KitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/kits")
public class KitController {

  @Autowired
  private KitRepository kitRepository;

  @GetMapping
  public ResponseEntity<List<SchoolKit>> getAll() {
    return ResponseEntity.ok(kitRepository.findAll());
  }

  @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> create(@RequestBody SchoolKit schoolKit) {
    SchoolKit kit = kitRepository.findByTitle(schoolKit.getTitle());
    if(kit != null) {
      return ResponseEntity.ok("{\"error:\" " + " " + "\"Kit já cadastrado\"}");
    }
    return ResponseEntity.ok(kitRepository.save(schoolKit));
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> update(@RequestBody SchoolKit schoolKit, @PathVariable Long id) {
    schoolKit.setId(id);
    return ResponseEntity.ok(kitRepository.save(schoolKit));
  }

}
