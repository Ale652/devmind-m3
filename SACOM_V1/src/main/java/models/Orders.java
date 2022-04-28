package models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "orders")
public class Orders implements Serializable {

    private static final long serialVersionUID = 1L;

    // Helping fields
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    // Fields associated with what is in orders23.xml
    @Column(name = "created")
    private String created; // this is from orders23.xml
    @Column(name = "id_from_file")
    private Integer ID; // this is the ID from the orders23.xml

    private Integer numberFromFile; // ex 23 from orders23.xml / we do not need it saved in Database

    private List<Orders> listOfOrders = new ArrayList<>();

    // mark the relation one-to-many between Order and Products
    @OneToMany(mappedBy = "Order")
    private List<Product> productsFromOrder = new ArrayList<>();

    // Constructors
    public Orders(){
        super();
    }

    public Orders(String created, Integer ID, List<Product> productsFromOrder) {
        super();
        this.created = created;
        this.ID = ID;
        this.productsFromOrder = productsFromOrder;
    }

    // Gettrs and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @XmlAttribute
    public String getCreated() {
        return created;
    }

    public void setCreated(String created) {
        this.created = created;
    }

    @XmlAttribute(name = "ID")
    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public Integer getNumberFromFile() {
        return numberFromFile;
    }

    public void setNumberFromFile(Integer numberFromFile) {
        this.numberFromFile = numberFromFile;
    }

    @XmlElement(name = "product")
    public List<Product> getProductsFromOrder() {
        return productsFromOrder;
    }

    public void setProductsFromOrder(List<Product> productsFromOrder) {
        this.productsFromOrder = productsFromOrder;
    }

    @XmlElement(name="order")
    public List<Orders> getListOfOrders() {
        return listOfOrders;
    }

    public void setListOfOrders(List<Orders> listOfOrders) {
        this.listOfOrders = listOfOrders;
    }

    // ToString

    @Override
    public String toString() {
        return
//                "Orders{" + "\n" +
//                "created=" + created + "\n" +
//                ", ID=" + ID + "\n" +
                ", listOfOrders=" + listOfOrders + "\n" +
                ", productsFromOrder=" + productsFromOrder + "\n" +
                '}' + "\n\n\n";
    }
}
