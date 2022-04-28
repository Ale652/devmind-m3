package com.example.sacom_v1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import services.ProcessOrdersService;

@SpringBootApplication
public class SacomV1Application {

    public static void main(String[] args) {
        SpringApplication.run(SacomV1Application.class, args);

        ProcessOrdersService procesOrdersService = new ProcessOrdersService();
        procesOrdersService.parseOrdersFileToObject();

    }

}
