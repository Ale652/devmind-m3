package com.example.quiz_6_1.controllers;

import org.springframework.web.bind.annotation.*;

import java.util.TimeZone;

@RestController
public class call {

//    Integer first;
//    Integer second;


    @RequestMapping(value = "add/first/{first}/second/{second}", method = RequestMethod.GET)
    public String calc(@PathVariable String first, @PathVariable String second) {

        int calcul = Integer.parseInt(first)+Integer.parseInt(second);
        System.out.println(calcul);
        return ""+calcul;
    }


}
