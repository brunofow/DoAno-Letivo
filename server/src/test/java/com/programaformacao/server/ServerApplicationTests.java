package com.programaformacao.server;

import org.junit.Test;
import org.springframework.context.annotation.Profile;

import com.programaformacao.server.models.Donor;
@Profile("dev")
public class ServerApplicationTests {
@Test
public void test() {
	Donor donor = new Donor(null, "Leo", "000-000-01", "123","leo@gmail.com");
	Donor donor2 = new Donor(null, "Gabriel", "000-000-02", "1234","Gabriel@gmail.com");
	
	
}
}
