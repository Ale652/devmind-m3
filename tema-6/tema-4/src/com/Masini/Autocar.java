package com.Masini;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class  Autocar implements Automobil{

    @Autowired Motor motor;

    @Override
    public int maxDrivingSpeed() {
        return 100;
    }

    public void setNume(){
        this.motor.setNume("Diesel");
    }

    @Override
    public void travel() {
        System.out.println("Running with the 'Autocar' : " + this.motor.getNume());
    }

}
