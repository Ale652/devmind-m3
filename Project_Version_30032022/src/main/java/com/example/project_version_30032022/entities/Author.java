package com.example.project_version_30032022;

import java.util.List;

public class Author extends User {
    // ATTRIBUTES
    List<Book> publishedBooks = null;

    // TODO :
    // Poate publica noi carti, in varianta electronica - Requestul de a publica o carte trebuie sa fie aprobat de un Administrator
    // Poate citi review-urile cititorilor pentru toate cartile din cadrul aplicatiei (nu doar cartile proprii)

    // CONSTRUCTORS TODO: TO REVIEW
    public Author(String email, String password, String firstName, String lastName, List<Book> publishedBooks) {
        super(email, password, firstName, lastName);
        this.publishedBooks = publishedBooks;
    }

    public Author(List<Book> publishedBooks) {
        this.publishedBooks = publishedBooks;
    }

    // GETTERS and SETTERS
    public List<Book> getPublishedBooks() {
        return publishedBooks;
    }

    public void setPublishedBooks(List<Book> publishedBooks) {
        this.publishedBooks = publishedBooks;
    }
}
