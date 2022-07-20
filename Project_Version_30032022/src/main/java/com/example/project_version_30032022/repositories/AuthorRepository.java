package com.example.project_version_30032022.repositories;

import com.example.project_version_30032022.entities.Author;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthorRepository extends JpaRepository<Author, Long> {

    Optional<Author> findById(Long id);
}
