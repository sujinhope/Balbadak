package com.a305.balbadack.model.service;

import java.util.List;
import java.util.Optional;

import com.a305.balbadack.model.dto.Veterinarian;

public interface VeterinarianService {
  public List<Veterinarian> searchAll();
  public Optional<Veterinarian> search(int no);

  public void insert(Veterinarian veterinarian);
  public void delete(int no);
}