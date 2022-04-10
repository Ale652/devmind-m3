package com.example.validation;

public class UserUnathorized extends User{
    private String text;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public UserUnathorized(String text) {
        super();
        this.text = text;
    }
}
