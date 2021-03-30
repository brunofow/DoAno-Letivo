package com.programaformacao.server.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
@RequestMapping("/upload")
public class UploadController {
   
   private static String UPLOADED_FOLDER = "C:\\Users\\NAJA INFORMATICA\\Desktop\\Nova";
   
   @GetMapping("/")
   public String index() {
       return "upload";
   }
   
   @PostMapping
   public ResponseEntity<String> singleFileUpload(@RequestParam("file") MultipartFile file,
           RedirectAttributes redirectAttributes) {

	if (file.isEmpty()) {
	redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
	
	}

	try {
	
	byte[] bytes = file.getBytes();
	Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
	Files.write(path, bytes);
	
	redirectAttributes.addFlashAttribute("message",
	"You successfully uploaded '" + file.getOriginalFilename() + "'");
	
	} catch (IOException e) {
	e.printStackTrace();
	}
	
	return ResponseEntity.ok("C:\\Users\\NAJA INFORMATICA\\Desktop\\Nova");
	}
	
   @GetMapping("/uploadStatus")
	public String uploadStatus() {
	    return "uploadStatus";
	}
	
	}