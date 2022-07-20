package com.example.project_version_30032022.security;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Role {
    AUTHOR("author"),
    READER("reader"),
    ADMIN("admin");

    private final String role;
}

