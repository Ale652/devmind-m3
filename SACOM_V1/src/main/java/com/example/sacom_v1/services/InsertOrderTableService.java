package com.example.sacom_v1.services;

import com.example.sacom_v1.entity.Orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.sacom_v1.repository.OrderRepository;


import java.util.List;

@Service
public class InsertOrderTableService implements InsertOrderTableServiceI {


    @Autowired
    private OrderRepository orderRepository;


    @Override
    public List<Orders> fetchOrderList() {
        return (List<Orders>) orderRepository.findAll();
    }

    // Save operation
    @Override
    public Orders saveOrder(Orders order)
    {
        return orderRepository.save(order);
    }
}
