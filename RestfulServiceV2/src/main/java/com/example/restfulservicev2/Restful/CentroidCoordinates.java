package com.example.restfulservicev2.Restful;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "centroidcoordinates")
@Data
@NoArgsConstructor
public class CentroidCoordinates{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double lat;
    private double lon;

    @Override
    public String toString() {
        return "\n"+"CentroidCoordinates{" +
                "lat=" + lat +
                ", lon=" + lon +
                '}'+
                "\n";
    }
}