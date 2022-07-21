package com.example.project_version_30032022.repositories;

import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findById(Long id);

    @Query("SELECT b from Book b where b.type = :type")
    List<Book> findByType(String type);

    @Query(value="SELECT * from books where status = ?1",nativeQuery = true)
    List<Book> findByStatus(String status);

    @Query(value="SELECT * from books where id_author = ?1 and title - ?2",nativeQuery = true)
    Book findByAuthorAndTitle(Long id_author, String title);
}
