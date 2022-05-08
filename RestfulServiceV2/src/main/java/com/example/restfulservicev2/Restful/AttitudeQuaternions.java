package com.example.restfulservicev2.Restful;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "attitudequaternions")
@Data
@NoArgsConstructor
public class AttitudeQuaternions{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double q0;
    private double q1;
    private double q2;
    private double q3;

    @Override
    public String toString() {
        return "\n"+"AttitudeQuaternions{" +
                "q0=" + q0 +
                ", q1=" + q1 +
                ", q2=" + q2 +
                ", q3=" + q3 +
                '}'+
                "\n";
    }
}
