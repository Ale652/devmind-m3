package services;

import models.Orders;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import java.io.File;

// parse orders23.xml file to on Order Object
public class ProcessOrdersService {

   public void parseOrdersFileToObject(){
       File xmlFile = new File("orders23.xml");

       JAXBContext jaxbContext;
       try
       {
           jaxbContext = JAXBContext.newInstance(Orders.class);

           Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();

           Orders order = (Orders) jaxbUnmarshaller.unmarshal(xmlFile);

           System.out.println(order);
       }
       catch (JAXBException e)
       {
           e.printStackTrace();
       }
   }
}
