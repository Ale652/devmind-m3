package com.example.restfulservicev2.Restful;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "coords")
@Data
@NoArgsConstructor
public class Coords{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_centroid_coordinates")
    private CentroidCoordinates centroid_coordinates;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_dscovr_j2000_position")
    private DscovrJ2000Position dscovr_j2000_position;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_lunar_j2000_position")
    private LunarJ2000Position lunar_j2000_position;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_sun_j2000_position")
    private SunJ2000Position sun_j2000_position;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_attitude_quaternions")
    private AttitudeQuaternions attitude_quaternions;


    @Override
    public String toString() {
        return "\n"+"Coords{" +
                "centroid_coordinates=" + centroid_coordinates +
                ", dscovr_j2000_position=" + dscovr_j2000_position +
                ", lunar_j2000_position=" + lunar_j2000_position +
                ", sun_j2000_position=" + sun_j2000_position +
                ", attitude_quaternions=" + attitude_quaternions +
                '}'+
                "\n";
    }
}