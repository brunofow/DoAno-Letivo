package com.programaformacao.server.controllers;

import com.programaformacao.server.repositories.DonorRepository;
import com.programaformacao.server.security.AccountCredentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

  @Autowired
  private DonorRepository donorRepository;

//  @PostMapping("/login")
//  public ResponseEntity<?> login(@RequestBody AccountCredentials credentials) {
//
//  }

//  @PostMapping("/register")
//  public ResponseEntity<?> register(@RequestBody AccountCredentials credentials) {
//
//  }
}
