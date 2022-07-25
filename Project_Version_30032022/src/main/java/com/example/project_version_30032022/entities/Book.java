package com.example.project_version_30032022.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Entity
@Table(name = "books")
//@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = "reviewuriPostedForThisBook")
public class Book {

    private String title;
    private String description;
    private String publishedDate;
    private String type;
//    private StatusBook status; // published , unpublished or rejected
    private Integer status; // published , unpublished or rejected
    private Long global_rating;

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




    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPublishedDate() {
        return publishedDate;
    }

    public void setPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Reader> getReadersOfThisBookWish() {
        return readersOfThisBookWish;
    }

    public void setReadersOfThisBookWish(Set<Reader> readersOfThisBookWish) {
        this.readersOfThisBookWish = readersOfThisBookWish;
    }

    public Set<Reader> getReadersOfThisBookRead() {
        return readersOfThisBookRead;
    }

    public void setReadersOfThisBookRead(Set<Reader> readersOfThisBookRead) {
        this.readersOfThisBookRead = readersOfThisBookRead;
    }

    public Set<Review> getReviewuriPostedForThisBook() {
        return reviewuriPostedForThisBook;
    }

    public void setReviewuriPostedForThisBook(Set<Review> reviewuriPostedForThisBook) {
        this.reviewuriPostedForThisBook = reviewuriPostedForThisBook;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }


    public Long getGlobal_rating() {
        return global_rating;
    }

    public void setGlobal_rating(Long global_rating) {
        this.global_rating = global_rating;
    }
}
