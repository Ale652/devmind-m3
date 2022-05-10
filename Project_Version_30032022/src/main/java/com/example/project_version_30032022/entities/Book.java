package com.example.project_version_30032022;

import java.util.List;

public class Book {
    // ATTRIBUTES
    List<Review> reviews   = null;

    // CONSTRUCTORS TODO: TO REVIEW
    public Book(List<Review> reviews) {
        this.reviews = reviews;
    }

    // GETTERS and SETTERS
    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }
}
