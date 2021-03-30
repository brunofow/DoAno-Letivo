package com.programaformacao.server.controllers;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;

import org.apache.commons.io.IOUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
@RequestMapping("/upload")
public class UploadController {
   
   private static String UPLOADED_FOLDER = "src/main/uploads/";

	@GetMapping(value = "/photo/{photo}")
	@ResponseBody
	public ResponseEntity<byte[]> getPhoto(@PathVariable String photo) throws IOException {

		File imgPath = new File(UPLOADED_FOLDER + photo);

		byte[] image = Files.readAllBytes(imgPath.toPath());
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.IMAGE_JPEG);
		headers.setContentLength(image.length);
		return new ResponseEntity<>(image, headers, HttpStatus.OK);
	}
   
   @PostMapping
   public ResponseEntity<?> singleFileUpload(@RequestParam("file") MultipartFile file,
           RedirectAttributes redirectAttributes) {

	if (file.isEmpty()) {
	redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
	
	}

	try {
	Date date = new Date();
	String url = date + file.getOriginalFilename();
	byte[] bytes = file.getBytes();
	Path path = Paths.get(UPLOADED_FOLDER + date + file.getOriginalFilename());
	Files.write(path, bytes);

		return ResponseEntity.ok(url);
	} catch (IOException e) {
	e.printStackTrace();

	return ResponseEntity.ok("Erro ao fazer upload da imagem");
	}
	}
	
   @GetMapping("/uploadStatus")
	public String uploadStatus() {
	    return "uploadStatus";
	}
	
	}