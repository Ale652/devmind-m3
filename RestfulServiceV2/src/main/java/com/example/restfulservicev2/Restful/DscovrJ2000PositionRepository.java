package com.example.restfulservicev2.Restful;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface DscovrJ2000PositionRepository extends JpaRepository<DscovrJ2000Position, Integer> {



    @Transactional
    @Modifying
    @Query(value = "UPDATE dscovrj2000position set x = :x WHERE id = :dscovrJ2000PositionId",nativeQuery = true)
    void  updateX(Float x, Integer dscovrJ2000PositionId);

}
