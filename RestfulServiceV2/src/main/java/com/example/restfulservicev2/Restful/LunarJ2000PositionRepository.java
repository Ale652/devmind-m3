package com.example.restfulservicev2.Restful;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LunarJ2000PositionRepository extends JpaRepository<LunarJ2000Position, Integer> {
}
