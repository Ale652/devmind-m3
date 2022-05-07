package com.example.sacom_v1.services;

import com.example.sacom_v1.entity.Orders;

import java.util.List;

public interface InsertOrderTableServiceI {

    // Save operation
    Orders saveOrder(Orders order);

    // Read operation
    List<Orders> fetchOrderList();

}
