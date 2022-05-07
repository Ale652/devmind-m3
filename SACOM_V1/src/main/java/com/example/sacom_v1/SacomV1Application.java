package com.example.sacom_v1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

//
@SpringBootApplication
//@ComponentScan({"controller"})
//@EntityScan("com/example/sacom_v1/entity")
//@EnableJpaRepositories("repository")
public class SacomV1Application {

    public static void main(String[] args) {
        SpringApplication.run(SacomV1Application.class, args);

//
//OrderController orderController = new OrderController();
//
//        ListOfOrders listOfOrders = orderController.getProcessOrdersService().parseOrdersFileToObject();
//
//
//
//        for(Order o: listOfOrders.getListOfOrders()) {
//            orderController.insertToOrdersTable(o.getCreated(), o.getID());
//            orderController.getOrderRepository().save(o);
//        }

    }

}
