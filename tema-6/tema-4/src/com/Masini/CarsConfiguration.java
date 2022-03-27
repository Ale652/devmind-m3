package com.Masini;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.Masini")
public class CarsConfiguration {


    @Bean()
    public Motor motor() {
        return new Motor(100,"name",500);
    }

    @Bean
    public Masina masina() {
        return new Masina(motor());
    }

    @Bean
    public Motocicleta mathTeacher() {
        Motocicleta motocicleta = new Motocicleta();
        motocicleta.setMotor(motor());
        return motocicleta;
    }

    @Bean
    public Autocar autocar() {
        return new Autocar();
    }


}
