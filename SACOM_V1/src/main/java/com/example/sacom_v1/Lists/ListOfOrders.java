package com.example.sacom_v1.Lists;

import com.example.sacom_v1.entity.Order;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.List;

@XmlRootElement(name = "orders")
public class ListOfOrders {
    private List<Order> listOfOrders = new ArrayList<>();

    @XmlElement(name="order")
    public List<Order> getListOfOrders() {
        return listOfOrders;
    }

    public void setListOfOrders(List<Order> listOfOrders) {
        this.listOfOrders = listOfOrders;
    }

    @Override
    public String toString() {
        return "ListOfOrders{" +
                "listOfOrders=" + listOfOrders +
                '}' + "\n\n";
    }
}
