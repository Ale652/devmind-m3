package com.Masini;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Test {
    @Autowired
    Autocar autocar;

    Masina masina;
    Motocicleta motocicleta;


    public void setMasina(Masina masina) {
        this.masina = masina;
    }

    @Autowired(required = false)
    public Test(Motocicleta motocicleta) {
        this.motocicleta = motocicleta;
    }

    @Autowired(required = false)
    public Test(Autocar autocar, Masina masina, Motocicleta motocicleta) {
        this.autocar = autocar;
        this.masina = masina;
        this.motocicleta = motocicleta;
    }


    @Autowired(required = false)
    public void setAutocar(Autocar autocar) {
        this.autocar = autocar;
    }
    @Autowired(required = false)
    public void setMotocicleta(Motocicleta motocicleta) {
        this.motocicleta = motocicleta;
    }


    public void printTest(){
        if(autocar!=null)
            System.out.println("maxDrivingSpeed autocar is : "+autocar.maxDrivingSpeed());

        if(masina!=null)
            System.out.println("maxDrivingSpeed masina is : "+masina.maxDrivingSpeed());

        if(motocicleta!=null)
            System.out.println("maxDrivingSpeed motocicleta is : "+motocicleta.maxDrivingSpeed());


    }


}
