package com.example.sacom_v1.repository;

import com.example.sacom_v1.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository  extends JpaRepository<Orders, Integer> {
//    @Override
//    List<Order> findAll();
//
//    Optional<Order> findById(Integer id);

    @Query(value = "INSERT INTO orders VALUES(?1,?2) ", nativeQuery = true)
    void insertOrdersToDB(String created, Integer ID);


}
