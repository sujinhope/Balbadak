package com.a305.balbadack.repository;

import com.a305.balbadack.model.dto.Veterinarian;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VeterinarianRepository extends JpaRepository<Veterinarian, Integer> {
  
}