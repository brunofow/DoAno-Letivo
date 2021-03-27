package com.programaformacao.server.controllers.exception;

public class ResourceNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	public ResourceNotFoundException(Object Id) {
		super("Resource not found. ID: " + Id);
	}
	
	
}
