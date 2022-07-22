package com.example.project_version_30032022.repositories;

import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

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

    @Query(value="SELECT wish_list_id from readers_wish_list where readers_of_this_book_wish_id = ?1",nativeQuery = true)
    List<Long> getIDsBooksWishList(Long id_reader);

    @Query(value="SELECT read_list_id from readers_read_list where readers_of_this_book_read_id = ?1",nativeQuery = true)
    List<Long> getIDsBooksReadList(Long id_reader);


    @Transactional
    @Modifying
    @Query(value="DELETE from readers_wish_list where readers_of_this_book_wish_id = ?1 and wish_list_id =?2",nativeQuery = true)
    public void  removeBookFromWishList(Long id_reader, Long id_book);

    @Transactional
    @Modifying
    @Query(value="DELETE from readers_read_list where readers_of_this_book_read_id = ?1 and read_list_id =?2",nativeQuery = true)
    public void  removeBookFromReadList(Long id_reader, Long id_book);
}
