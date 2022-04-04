package com.example.rest_1;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

@SpringBootApplication
public class Rest1Application {

    public static void main(String[] args) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();


        File file = new ClassPathResource("jsonExample.json").getFile();//new File("/src/main/resources/jsonExample.json");
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
    }

}
