package com.example.project_version_30032022;

import java.util.List;

public class Reader extends User{
    // ATTRIBUTES
    List<Book> readBooks  = null;
    List<Review> reviews   = null;
    List<Book> wishList  = null;

    // TODO:
    // REVIEW CONSTRUCTORs DEFINITION
    // Poate marca o carte ca fiind citita
    // Poate descarca varianta electronica a unei carti pentru a o citi


    // CONSTRUCTORS
    public Reader(String email, String password, String firstName, String lastName, List<Book> readBooks, List<Review> reviews, List<Book> wishList) {
        super(email, password, firstName, lastName);
        this.readBooks = readBooks;
        this.reviews = reviews;
        this.wishList = wishList;
    }

    // GETTERS and SETTERS
    public List<Book> getReadBooks() {
        return readBooks;
    }

    public void setReadBooks(List<Book> readBooks) {
        this.readBooks = readBooks;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public List<Book> getWishList() {
        return wishList;
    }

    public void setWishList(List<Book> wishList) {
        this.wishList = wishList;
    }
}
