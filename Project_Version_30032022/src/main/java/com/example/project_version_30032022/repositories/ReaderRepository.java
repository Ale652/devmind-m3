package com.example.project_version_30032022.repositories;


import com.example.project_version_30032022.entities.Reader;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReaderRepository extends JpaRepository<Reader,Long> {
    Optional<Reader> findById(Long id);
}
