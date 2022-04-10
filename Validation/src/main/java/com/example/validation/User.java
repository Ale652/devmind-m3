package com.example.validation;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.sql.Array;
import java.util.ArrayList;
import java.util.Hashtable;


// TODO : Change the User class to an Interface
public class  User {

    private static ArrayList<User> usersList = new ArrayList<User>();
    private static Hashtable<String,User> usersHashTable = new Hashtable<>();

//    private static Hashtable<String,User> usersAunthenticatedHashTable = new Hashtable<>();


    @NotNull(message = "firstName must be  not-null")
    @NotBlank(message = "firstName must be a non-empty string")
    private String firstName;
    @NotNull(message = "lastName must be not-null")
    @NotBlank(message = "firstName must be a non-empty string")
    private String lastName;
    @NotNull(message = "email must be not-null")
    @Pattern(regexp = "^[A-Za-z0-9+_.-]+@(.+)$", message = "email must contain @ and .")
    private String email;
    //@Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$",
    //        message = "password must have digit + lowercase + uppercase + punctuation + symbol")
    private String password;


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

    public static ArrayList<User> getUsersList() {
        return usersList;
    }

    public static void setUsersList(ArrayList<User> usersList) {
        User.usersList = usersList;
    }

    public static Hashtable<String, User> getUsersHashTable() {
        return usersHashTable;
    }

    public static void setUsersHashTable(Hashtable<String, User> usersHashTable) {
        User.usersHashTable = usersHashTable;
    }

    public User(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public User(){}

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    //    public static Hashtable<String, User> getUsersAunthenticatedHashTable() {
//        return usersAunthenticatedHashTable;
//    }
//
//    public static void setUsersAunthenticatedHashTable(Hashtable<String, User> usersAunthenticatedHashTable) {
//        User.usersAunthenticatedHashTable = usersAunthenticatedHashTable;
//    }
}

