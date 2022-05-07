package com.example.sacom_v1.Lists;

import com.example.sacom_v1.entity.Orders;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.List;

@XmlRootElement(name = "orders")
public class ListOfOrders {
    private List<Orders> listOfOrders = new ArrayList<>();

    @XmlElement(name="order")
    public List<Orders> getListOfOrders() {
        return listOfOrders;
    }

    public void setListOfOrders(List<Orders> listOfOrders) {
        this.listOfOrders = listOfOrders;
    }

    @Override
    public String toString() {
        return "ListOfOrders{" +
                "listOfOrders=" + listOfOrders +
                '}' + "\n\n";
    }
}
