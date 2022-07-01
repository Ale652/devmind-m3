package com.example.project_version_30032022.controllers.request;

import lombok.Data;

@Data
public class AddAuthorRequest {
    private String email;
    private String password;
    private String firstName;
    private String lastName;
}
