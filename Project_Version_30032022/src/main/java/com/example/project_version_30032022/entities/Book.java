package com.example.project_version_30032022.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Entity
@Table(name = "books")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Book {

    private String title;
    private String description;
    private String publishedDate;
    private String type;
    private String status; // published , unpublished or rejected
    //    private String author;
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToMany(mappedBy = "wishList", fetch = FetchType.LAZY)
    @JsonIgnore
    public Set<Reader> readersOfThisBookWish;


    @ManyToMany(mappedBy = "readList", fetch = FetchType.LAZY)
    @JsonIgnore
    public Set<Reader> readersOfThisBookRead;


    @OneToMany(mappedBy = "book")
    @JsonIgnore
    private Set<Review> reviewuriPostedForThisBook;

    @ManyToOne
    @JoinColumn(name = "id_author")
    private Author author;




    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return Objects.equals(title, book.title) && Objects.equals(author, book.author) && Objects.equals(description, book.description) && Objects.equals(publishedDate, book.publishedDate) && Objects.equals(id, book.id) && Objects.equals(readersOfThisBookWish, book.readersOfThisBookWish);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, author, description, publishedDate, id, readersOfThisBookWish);
    }

}
