package com.devmind.springapp;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JavaTeacher implements ITeacher {

    private WisdomWordsService wisdomService;

    public JavaTeacher() {
        System.out.println("From default constructor MyTeacher");
    }

    // constructor unic care primeste ca parametru un obiect de tipul WisdomWordsService
    public JavaTeacher(WisdomWordsService wisdomService) {
        this.wisdomService = wisdomService;
    }

    @Override
    public String getHomeWork() {
        return "Create 100 classes";
    }

    @Override
    public String getWisdom() {
        return wisdomService.getMessage();
    }
}