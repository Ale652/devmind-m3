package com.Masini;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
public class Motor {
    private int putere;
    private String nume;
    private int numarCilindri;



    public Motor(int putere, String nume, int numarCilindri) {
        this.putere = putere;
        this.nume = nume;
        this.numarCilindri = numarCilindri;
    }

    public void setPutere(int putere) {
        this.putere = putere;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public void setNumarCilindri(int numarCilindri) {
        this.numarCilindri = numarCilindri;
    }


    public int getPutere() {
        return putere;
    }

    public String getNume() {
        return this.nume;
    }

    public int getNumarCilindri() {
        return numarCilindri;
    }
}
