import Lists.ListOfOrders;
import controllers.OrderController;
import models.Order;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({ "controllers", "services", "repositories","models","Lists"})
public class SacomV1Application {

    public static void main(String[] args) {
        SpringApplication.run(SacomV1Application.class, args);

        OrderController orderController = new OrderController();

        ListOfOrders listOfOrders = orderController.getProcessOrdersService().parseOrdersFileToObject();



        for(Order o: listOfOrders.getListOfOrders()) {
            orderController.insertToOrdersTable(o.getCreated(), o.getID());
            orderController.getOrderRepository().save(o);
        }

    }

}
