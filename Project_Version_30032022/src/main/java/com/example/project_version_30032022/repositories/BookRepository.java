package com.example.project_version_30032022.repositories;

import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findById(Long id);
}
