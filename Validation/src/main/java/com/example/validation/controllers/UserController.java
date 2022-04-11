package com.example.validation.controllers;

import com.example.validation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class UserController {


    @PostMapping("/register")
    public ResponseEntity<User>  handleRegister(@Valid @RequestBody User user) {


        if(User.getUsersHashTable().containsKey(user.getEmail())) {

            System.out.println("Email alredy registered.");
            return new ResponseEntity<>(new UserUnathorized("This email is already present !"), HttpStatus.UNAUTHORIZED);
        }
        else {
            User.getUsersHashTable().put(user.getEmail(), user);
            System.out.println(User.getUsersHashTable().get(user.getEmail()));
            return  new ResponseEntity<>(user, HttpStatus.OK);
        }


    }


    @PostMapping("/login")
    public ResponseEntity<UserLogin>  login(@Valid @RequestBody UserLogin userLogin) {
        if(UserLogin.getUsersAunthenticatedHashTable().containsKey(userLogin.getEmail())) {

            System.out.println("Email alredy authenticated.");
            return new ResponseEntity<>(new UserLoginUnsuccess("This email is already authenticated !"), HttpStatus.ACCEPTED);
        }
        else {
            if(this.authentificateUser(userLogin.getEmail(),userLogin.getPassword(),userLogin)) {
                UserLogin.getUsersAunthenticatedHashTable().put(userLogin.getEmail(), userLogin);

            }
            return new ResponseEntity<>(userLogin, HttpStatus.OK);
        }
    }

    //TODO: REVIEW PARAMETERS of this function
    // here we check if the user that we want to authentificate is an user that was registered
    private boolean authentificateUser(String email, String password,UserLogin userLogin){

        User userTemp = new User(email,password);
        if(User.getUsersHashTable().containsKey(email))
            if((User.getUsersHashTable().get(email).getPassword().equals(password)) &&
                    (User.getUsersHashTable().get(email).getEmail().equals(email))) {
                userLogin.setFirstName(User.getUsersHashTable().get(email).getFirstName());
                userLogin.setLastName(User.getUsersHashTable().get(email).getLastName());
                return true;
            }
        return false;
    }


    @RequestMapping(value = "/logout/{email}", method = RequestMethod.GET)
    //@ResponseBody
    public ResponseEntity<UserLogout>  logout(  @PathVariable String email) {

        if(UserLogin.getUsersAunthenticatedHashTable().containsKey(email)) {
            UserLogin.getUsersAunthenticatedHashTable().remove(email);
            System.out.println("Email authenticated. It will be logged out !");
            return new ResponseEntity<>(new UserLogout("You are logged out !"), HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(new UserLogout("LogOut NOT in success !"), HttpStatus.UNAUTHORIZED);

    }



//    @PostMapping("/login")
//    public ResponseEntity<User>  login(@Valid @RequestBody User userLogin) {
//        if(User.getUsersAunthenticatedHashTable().containsKey(userLogin.getEmail())) {
//
//            System.out.println("Email alredy authenticated.");
//            return new ResponseEntity<>(new UserLoginUnsuccess("This email is already authenticated !"), HttpStatus.UNAUTHORIZED);
//        }
//        else {
//            User.getUsersAunthenticatedHashTable().put(userLogin.getEmail(), userLogin);
//            System.out.println(User.getUsersAunthenticatedHashTable().get(userLogin.getEmail()));
//            return  new ResponseEntity<>(userLogin, HttpStatus.OK);
//        }
//    }

}
