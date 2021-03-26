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

import com.programaformacao.server.models.Parent;
import com.programaformacao.server.repositories.ParentRepository;

@RestController
@RequestMapping("/parent")
public class ParentController {
	
	
	@Autowired
	private ParentRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Parent>> index(){
		
		return ResponseEntity.ok(repository.findAll());	
	}		

	 @PostMapping
	  public ResponseEntity<?> create(@RequestBody Parent parent) {
	    return ResponseEntity.ok(repository.save(parent));
	  }
	 
	 @PutMapping
		public ResponseEntity<Parent> put (@RequestBody Parent name){
			
			return ResponseEntity.status(HttpStatus.OK).body(repository.save(name));
		}
	 
	 @DeleteMapping("/{id}")
		public void delete (@PathVariable long id) {
			
			repository.deleteById(id);
			
		}	 
}
