package com.devmind.springapp;

import lombok.Setter;

public class WisdomWordsService {

    private String message = "Hard work pays off";

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}