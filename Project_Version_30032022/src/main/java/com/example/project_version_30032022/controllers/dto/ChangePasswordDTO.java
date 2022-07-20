package com.example.project_version_30032022.controllers.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChangePasswordDTO {
    private String email;
    private String password;
    private String newPassword;
    private String confirmNewpassword;
}
