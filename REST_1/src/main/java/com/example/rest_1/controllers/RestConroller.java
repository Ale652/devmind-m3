package com.example.rest_1.controllers;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.TimeZone;

@RestController
public class RestConroller {



    @RequestMapping(value = "/restCall", method = RequestMethod.GET)
    public String time(@RequestParam String callRest) {


        System.out.println("REST call : "+ callRest);
        return "REST call : "+ callRest;
    }

}










