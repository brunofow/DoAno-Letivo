package com.programaformacao.server.repositories;
import com.programaformacao.server.models.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation, Long> {

}
