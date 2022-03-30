package com.example.project_version_30032022.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginRegister {

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String loginRegister(@RequestParam String loginRegister) {

        System.out.println(loginRegister);
        return "Page: " + loginRegister;
    }



}
