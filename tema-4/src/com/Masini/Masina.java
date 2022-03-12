package com.Masini;

import org.springframework.stereotype.Component;

@Component
public class Masina implements Automobil{

    Motor motor;


    @Override
    public int maxDrivingSpeed() {
        return 110;
    }

    @Override
    public void travel() {
        System.out.println("Running with the 'Masina'.");
    }

    public Masina(Motor motor) {
        this.motor = motor;
    }
}
