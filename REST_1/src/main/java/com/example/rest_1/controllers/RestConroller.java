package com.example.rest_1.controllers;


import com.example.rest_1.Message;
import com.example.rest_1.MessageResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.EntityResponse;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Date;
import java.util.TimeZone;

@RestController
public class RestConroller {


    @PostMapping(value = "/messages")
    public ResponseEntity<MessageResponse>  messages(@RequestBody Message message,@RequestHeader("authentication") String authentication) {

        MessageResponse messageResponse = new MessageResponse();

        if(authentication.equals("devmind-api-key"))
            return new ResponseEntity<>(null, HttpStatus.OK);
        else return  new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }

}














