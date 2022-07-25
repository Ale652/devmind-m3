package com.example.project_version_30032022.repositories;

import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Book;
import com.example.project_version_30032022.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    Optional<Review> findById(Long id);


    @Query(value="SELECT count(*) from review where id_book = ?1",nativeQuery = true)
    Integer getNumberReviewsForBook(Long id_book);

}
