package com.example.rest_1;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

@SpringBootApplication
public class Rest1Application {

    public static void main(String[] args) throws IOException {
        SpringApplication.run(Rest1Application.class, args);

        ObjectMapper objectMapper = new ObjectMapper();


        // read the single json in a Java Object;
        File file = new ClassPathResource("static/jsonExample.json").getFile();//new File("/src/main/resources/jsonExample.json");
        String json = file.toString();

        StringBuilder contentBuilder = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new FileReader(json)))
        {

            String sCurrentLine;
            while ((sCurrentLine = br.readLine()) != null)
            {
                contentBuilder.append(sCurrentLine).append("\n");
            }
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }


        restClass restclassobj = objectMapper.readValue(contentBuilder.toString(), restClass.class);

        System.out.println(restclassobj);



        // read the Array

        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

        File fileArray = new ClassPathResource("static/jsonExampleArray.json").getFile();

        json = fileArray.toString();

        StringBuilder contentBuilderArray = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new FileReader(json)))
        {

            String sCurrentLine;
            while ((sCurrentLine = br.readLine()) != null)
            {
                contentBuilderArray.append(sCurrentLine).append("\n");
            }
        }
        catch (IOException e)
        {
            System.out.println("issue from here");
            e.printStackTrace();

        }


        //System.out.println(contentBuilderArray.toString());
        restClassArray restClassArray = objectMapper.readValue(contentBuilderArray.toString(), restClassArray.class);

        System.out.println(restClassArray);

    }

}
