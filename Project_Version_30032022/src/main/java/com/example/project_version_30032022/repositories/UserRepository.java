package com.example.project_version_30032022.repositories;

import com.example.project_version_30032022.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Page<User> findByEmailContains(String email, Pageable pageable);
    Page<User> findAllByEmail(String email, Pageable pageable);
    Page<User> findAllByEmailContainsAndEmail(String email, String auth, Pageable pageable);
    Boolean existsByEmail(String email);
}
