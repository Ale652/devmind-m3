package com.Masini;

import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;


@Component
public class TestAutomobil {

    @Autowired
    private Automobil autocar;


    public void test() {
        System.out.println("\n From concrete qualifier from reference Interface : "+autocar.maxDrivingSpeed());
    }
}
