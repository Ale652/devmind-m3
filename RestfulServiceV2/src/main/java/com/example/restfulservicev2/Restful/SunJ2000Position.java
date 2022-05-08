package com.example.restfulservicev2.Restful;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "sunj2000position")
@Data
@NoArgsConstructor
public class SunJ2000Position{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double x;
    private double y;
    private double z;


    @Override
    public String toString() {
        return "\n"+"SunJ2000Position{" +
                "x=" + x +
                ", y=" + y +
                ", z=" + z +
                '}'+
                "\n";
    }
}
