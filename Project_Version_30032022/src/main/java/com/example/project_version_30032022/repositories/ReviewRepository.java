package com.example.project_version_30032022.repositories;

import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    Optional<Review> findById(Long id);
}
