package com.example.restfulservicev2.Restful;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DscovrJ2000PositionRepository extends JpaRepository<DscovrJ2000Position, Integer> {
}
