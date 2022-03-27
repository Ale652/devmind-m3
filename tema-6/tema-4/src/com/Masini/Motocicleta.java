package com.Masini;

import org.springframework.stereotype.Component;

@Component
public class Motocicleta implements Automobil{

    Motor motor;

    @Override
    public int maxDrivingSpeed() {
        return 45;
    }

    @Override
    public void travel() {
        System.out.println("Running with the 'Motocicleta'.");
    }

    public void setMotor(Motor motor) {
        this.motor = motor;
    }
}
