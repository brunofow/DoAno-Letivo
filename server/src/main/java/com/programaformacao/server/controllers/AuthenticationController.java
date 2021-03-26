package com.programaformacao.server.controllers;

import com.programaformacao.server.models.Donor;
import com.programaformacao.server.models.Parent;
import com.programaformacao.server.models.School;
import com.programaformacao.server.repositories.DonorRepository;
import com.programaformacao.server.repositories.ParentRepository;
import com.programaformacao.server.repositories.SchoolRepository;
import com.programaformacao.server.security.AccountCredentials;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

}
