package com.example.validation;

public class UserLoginUnsuccess extends UserLogin{
    private String text;

    public UserLoginUnsuccess(String email, String password, String text) {
        super();
        this.text = text;
    }

    public UserLoginUnsuccess(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
