package com.example.validation;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.Hashtable;

public class UserLogin{

    private static Hashtable<String,UserLogin> usersAunthenticatedHashTable = new Hashtable<>();

    @NotNull(message = "email must be not-null")
    private String email;
    @NotNull(message = "password must be not-null")
    private String password;


    private String firstName;
    private String lastName;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserLogin(String email, String password) {
        this.email = email;
        this.password = password;
    }
    public UserLogin() {

    }

    public static Hashtable<String, UserLogin> getUsersAunthenticatedHashTable() {
        return usersAunthenticatedHashTable;
    }

    public static void setUsersAunthenticatedHashTable(Hashtable<String, UserLogin> usersAunthenticatedHashTable) {
        UserLogin.usersAunthenticatedHashTable = usersAunthenticatedHashTable;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
