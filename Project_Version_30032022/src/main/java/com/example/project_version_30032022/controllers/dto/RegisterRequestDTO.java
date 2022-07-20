package com.example.project_version_30032022.controllers.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequestDTO {
    private String email;
    private String role;
    private String password;
    private String firstName;
    private String lastName;
}