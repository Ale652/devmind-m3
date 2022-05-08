package com.example.restfulservicev2.Restful;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface SunJ2000PositionRepository extends JpaRepository<SunJ2000Position, Integer> {
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM sunj2000position WHERE id = :id",nativeQuery = true)
    void deleteSunJ2000PositionRepository(Integer id);
}
