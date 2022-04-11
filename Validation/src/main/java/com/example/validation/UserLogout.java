package com.example.validation;

public class UserLogout {
    private String email;
    private String text;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getText() {
        return text;
    }


    public void setText(String text) {
        this.text = text;
    }

    public UserLogout(String email, String text) {
        this.email = email;
        this.text = text;
    }

    public UserLogout() {

    }

    public UserLogout(String text) {
        this.text = text;
    }
}
