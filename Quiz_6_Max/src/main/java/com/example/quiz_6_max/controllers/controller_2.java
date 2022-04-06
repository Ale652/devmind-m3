package com.example.quiz_6_max.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller_2 {

    @RequestMapping(value = "add/first/{first}/second/{second}", method = RequestMethod.GET)
    public String calc(@PathVariable String first, @PathVariable String second) {

        int calcul = Integer.parseInt(first)+Integer.parseInt(second);
        System.out.println(calcul);
        return ""+calcul;
    }



    public String calculateBigValues(String s1, String s2, String s3){
//        String s3 = "";
        int value_3 = 0;

        while(s1.length() != 0 || s2.length()!=0){
            int value_1 = Integer.parseInt(s1.substring(s1.length()-2,s1.length()-1));
            int value_2 = Integer.parseInt(s2.substring(s2.length()-2,s2.length()-1));

            value_3 = value_1 + value_2;

            if(value_3>10)
            {
                s3 = value_3%10 + " " + s3;
                value_3 = value_3/10;
            }
            else{
                s3 = value_3 + " " + s3;
                value_3 = 0;
            }

            s1 = s1.substring(0,s1.length()-2);
            s2 = s2.substring(0,s2.length()-2);

        }


        System.out.println(s3);



        return s3;

    }
}
