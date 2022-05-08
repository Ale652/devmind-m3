package com.example.restfulservicev2.Restful;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "root")
@Data
@NoArgsConstructor
public class Root{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String identifier;
    private String caption;
    private String image;
    private String version;

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
    private AttitudeQuaternions id_attitude_quaternions;

    private String date;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_Coords")
    private Coords coords;



    @Override
    public String toString() {
        return "\n"+"Root{" +
                "identifier='" + identifier + '\'' +
                ", caption='" + caption + '\'' +
                ", image='" + image + '\'' +
                ", version='" + version + '\'' +
                ", centroid_coordinates=" + centroid_coordinates +
                ", dscovr_j2000_position=" + dscovr_j2000_position +
                ", lunar_j2000_position=" + lunar_j2000_position +
                ", sun_j2000_position=" + sun_j2000_position +
                ", attitude_quaternions=" + id_attitude_quaternions +
                ", date='" + date + '\'' +
                ", coords=" + coords +
                '}' +
                "\n\n";
    }
}

