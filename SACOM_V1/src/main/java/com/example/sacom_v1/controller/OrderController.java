package com.example.sacom_v1.controller;

//import javax.validation.Valid;

import com.example.sacom_v1.Lists.ListOfOrders;
import com.example.sacom_v1.entity.Orders;
import com.example.sacom_v1.services.ProcessOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.sacom_v1.services.InsertOrderTableService;

import java.util.List;

@RestController
public class OrderController {

    @Autowired private InsertOrderTableService insertOrderTableService;
    @Autowired  private ProcessOrdersService processOrdersService;


    // Save operation
    @GetMapping("/addOrders")
    public void saveOrders() {
        ListOfOrders listOfOrders = this.getProcessOrdersService().parseOrdersFileToObject();

        for (Orders o : listOfOrders.getListOfOrders()) {
//            orderController.insertToOrdersTable(o.getCreated(), o.getID());
//            orderController.getOrderRepository().save(o);
            insertOrderTableService.saveOrder(o);
        }
    }

    // Read operation
    @GetMapping("/orders")
    public List<Orders> fetchOrderList()
    {
        return insertOrderTableService.fetchOrderList();
    }

        //-----------------



    // Setters and Getters :
    public ProcessOrdersService getProcessOrdersService() {
        return processOrdersService;
    }

    public void setProcessOrdersService(ProcessOrdersService processOrdersService) {
        this.processOrdersService = processOrdersService;

    }
//
//    public InsertOrderTableService getInsertOrderTableService() {
//        return insertOrderTableService;
//    }
//
//    public void setInsertOrderTableService(InsertOrderTableService insertOrderTableService) {
//        this.insertOrderTableService = insertOrderTableService;
//    }
//
    // Methods :
    public ListOfOrders parseOrdersFileToObject(){
        return processOrdersService.parseOrdersFileToObject();
    }

//    public void insertToOrdersTable(String created, Integer ID){
//        insertOrderTableService.insertToOrdersTable(created,ID);
//    }
//
//    public OrderRepository getOrderRepository(){
//       return insertOrderTableService.getOrderRepository();
//    }

}
