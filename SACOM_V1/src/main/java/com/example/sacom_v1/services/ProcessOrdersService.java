package com.example.sacom_v1.services;

import com.example.sacom_v1.Lists.ListOfOrders;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import java.io.File;

// parse orders23.xml file to on Order Object
public class ProcessOrdersService {


   public ListOfOrders parseOrdersFileToObject(){


       File xmlFile = new File("orders23.xml");

       JAXBContext jaxbContext;

       ListOfOrders listOfOrders = null;
       try
       {
           jaxbContext = JAXBContext.newInstance(ListOfOrders.class);

           Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();

           listOfOrders = (ListOfOrders) jaxbUnmarshaller.unmarshal(xmlFile);

           System.out.println(listOfOrders);

           return listOfOrders;
       }
       catch (JAXBException e)
       {
           e.printStackTrace();
       }

       return listOfOrders;
   }



}
