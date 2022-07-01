package com.example.project_version_30032022.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@Data
@NoArgsConstructor
@AllArgsConstructor
 public abstract class User {
     private String email;
     private String password;
     private String firstName;
     private String lastName;
     private String loggedIn;

 }