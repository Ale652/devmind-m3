package com.example.springbootex1.controller;

import com.example.springbootex1.MathResponse;
import com.example.springbootex1.Mathc;
import com.github.javafaker.Faker;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.util.Calendar;
import java.util.Formatter;
import java.util.Locale;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;
//import java.parser.ParseException;

import java.lang.Math;


@RestController
public class Controllers {


    // Create Formatter class object
    Formatter format = new Formatter();

    // Creating a calendar
    private static Calendar calendar = Calendar.getInstance();
    private static Date date = new Date();
    DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");


    Faker faker = new Faker(); // from https://github.com/DiUS/java-faker


    @RequestMapping(value = "/time", method = RequestMethod.GET)
    public String time(@RequestParam String timezone) {

        df.setTimeZone(TimeZone.getTimeZone(timezone));

        System.out.println("Date and time in: " + timezone + " is " + df.format(date));
        return "" + df.format(date);
    }


    @RequestMapping(value = "/harry-potter", method = RequestMethod.GET)
    public String harrypotter() {

        return "" + faker.name().fullName();
    }


    @PostMapping("/math-service")
    public MathResponse postController(
            @RequestBody Mathc mathc)  {

        MathResponse mathrRsponse = new MathResponse();

        //return ResponseEntity.ok(HttpStatus.OK);

        switch (mathc.getOperation()){
            case "sum": {
                mathrRsponse.setText((mathc.getFirstNumber() + mathc.getSecondNumber())+"");
                break;
            }
            case "difference": {
                mathrRsponse.setText((mathc.getFirstNumber() - mathc.getSecondNumber())+"") ;

                break;}
            case "multiply": {
                mathrRsponse.setText((mathc.getFirstNumber() * mathc.getSecondNumber())+"");
                break;}
            case "divide": {
                mathrRsponse.setText((mathc.getFirstNumber() / mathc.getSecondNumber())+"");
                break;}
            case "power": {
                mathrRsponse.setText(Math.pow(mathc.getFirstNumber() , mathc.getSecondNumber())+"");
                break;}
            default:  mathrRsponse.setText((mathc.getFirstNumber() + mathc.getSecondNumber())+"");
        }

        return mathrRsponse;
    }



}