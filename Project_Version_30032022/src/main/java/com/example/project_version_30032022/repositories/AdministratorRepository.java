package com.example.project_version_30032022.repositories;

import com.example.project_version_30032022.entities.Administrator;
import com.example.project_version_30032022.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdministratorRepository extends JpaRepository <Administrator, Long>{
    Optional<Administrator> findById(Long id);
    
}
