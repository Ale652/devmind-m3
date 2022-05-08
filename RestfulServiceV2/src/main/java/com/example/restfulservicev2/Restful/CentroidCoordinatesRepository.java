package com.example.restfulservicev2.Restful;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface CentroidCoordinatesRepository extends JpaRepository<CentroidCoordinates, Integer> {

    @Transactional
    @Modifying
    @Query(value = "UPDATE dscovrj2000position set lat = :lat WHERE id = :centroidCoordinatesId",nativeQuery = true)
    void  updateLat(Float lat, Integer centroidCoordinatesId);

}
