package com.programaformacao.server.controllers;

import com.programaformacao.server.models.Donor;
import com.programaformacao.server.models.LoginForm;
import com.programaformacao.server.models.Parent;
import com.programaformacao.server.models.RegisterForm;
import com.programaformacao.server.repositories.DonorRepository;
import com.programaformacao.server.repositories.ParentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

  @Autowired
  private ParentRepository parentRepository;

  @Autowired
  private DonorRepository donorRepository;

  @Bean
  public BCryptPasswordEncoder passwordEncoder() {
    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
    return bCryptPasswordEncoder;
  }

  private String loginResponse(Long id) {
    return "{\"user_id\": " + id + "}";
  }

  @PostMapping( value = "/login", produces = MediaType.APPLICATION_JSON_VALUE )
  public ResponseEntity<?> login(@RequestBody LoginForm loginForm) {
    String errorResponse = "{\"error:\" \"Email ou senha incorretos\"}";

    if(loginForm.getAccountType().equals("parent")) {
      Parent dbParent = parentRepository.findByEmail(loginForm.getEmail());
      if(dbParent == null) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
      if(passwordEncoder().matches(loginForm.getPassword(), dbParent.getPassword())) {
        return ResponseEntity.ok(loginResponse(dbParent.getId()));
      } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
      }
    } else {
      Donor dbDonor = donorRepository.findByEmail(loginForm.getEmail());
      if(dbDonor == null) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
      if(passwordEncoder().matches(loginForm.getPassword(), dbDonor.getPassword())) {
        return ResponseEntity.ok(loginResponse(dbDonor.getId()));
      } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
      }
    }
  }


  @PostMapping( value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> register(@RequestBody RegisterForm registerForm) {
    String successResponse = "{\"message:\" \"Usuário cadastrado com sucesso\"}";
    String errorResponse = "{\"error:\" \"Email já cadastrado no banco de dados\"}";

    if (registerForm.getAccountType().equals("parent")) {
      Parent dbParent = parentRepository.findByEmail(registerForm.getEmail());
      Parent parent = new Parent();
      String hashedPassword = passwordEncoder().encode(registerForm.getPassword());
      if(dbParent != null) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResponse);
      } else {
        parent.setEmail(registerForm.getEmail());
        parent.setPassword(hashedPassword);
        parent.setEmittingOrgan(registerForm.getEmittingOrgan());
        parent.setRg(registerForm.getRg());
        parent.setName(registerForm.getName());
        return ResponseEntity.ok(parentRepository.save(parent));
      }
    } else {
      Donor dbDonor = donorRepository.findByEmail(registerForm.getEmail());
      Donor donor = new Donor();
      String hashedPassword = passwordEncoder().encode(registerForm.getPassword());
      if(dbDonor != null) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResponse);
      } else {
        donor.setEmail(registerForm.getEmail());
        donor.setPassword(hashedPassword);
        donor.setEmittingOrgan(registerForm.getEmittingOrgan());
        donor.setRg(registerForm.getRg());
        donor.setName(registerForm.getName());
        return ResponseEntity.ok(donorRepository.save(donor));
      }
    }
  }
}
