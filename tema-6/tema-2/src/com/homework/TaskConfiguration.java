package com.homework;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;


@Configuration
@ComponentScan("com.homework")
public class TaskConfiguration {

    @Bean
    @Scope(value="prototype")
    public Task task() {
        return new Task();
    }
}


