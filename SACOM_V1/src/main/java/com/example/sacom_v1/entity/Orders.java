package com.example.sacom_v1.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

@Entity
@Table
//@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Orders implements Serializable {

    private static final long serialVersionUID = 1L;

//    // Helping fields
//    @Id
//    @Column(name = "id")
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Integer id;
//
//
//    // Fields associated with what is in orders23.xml
//    @Column(name = "created")
//    private String created; // this is from orders23.xml
//    @Column(name = "id_from_file")
//    private Integer ID; // this is the ID from the orders23.xml
//
//    private Integer numberFromFile; // ex 23 from orders23.xml / we do not need it saved in Database
//
//
//
//    // mark the relation one-to-many between Order and Products
//    @OneToMany(mappedBy = "Order")
//    private List<Product> productsFromOrder = new ArrayList<>();

    // Helping fields
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idOrder;


    // Fields associated with what is in orders23.xml
    private String created; // this is from orders23.xml
    private Integer idFromFile; // this is the ID from the orders23.xml
    private Integer numberFromFile; // ex 23 from orders23.xml / we do not need it saved in Database



    // mark the relation one-to-many between Order and Products
    @OneToMany(mappedBy = "Order")
    private List<Product> productsFromOrder = new ArrayList<>();

    // Constructors
//    public Order(){
//        super();
//    }
//
//    public Order(String created, Integer ID, List<Product> productsFromOrder) {
//        super();
//        this.created = created;
//        this.ID = ID;
//        this.productsFromOrder = productsFromOrder;
//    }

    // Gettrs and Setters
//    public Integer getIdOrder() {
//        return idOrder;
//    }
//
//    public void setIdOrder(Integer id) {
//        this.idOrder = id;
//    }

    @XmlAttribute
    public String getCreated() {
        return created;
    }

    public void setCreated(String created) {
        this.created = created;
    }

    @XmlAttribute(name = "ID")
    public Integer getID() {
        return idFromFile;
    }

    public void setID(Integer ID) {
        this.idFromFile = ID;
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


    // ToString


    @Override
    public String toString() {
        return "\n Order{" +
                "created='" + created + '\'' +
                ", ID=" + idFromFile +
                ", productsFromOrder=" + productsFromOrder +
                '}'+ "\n\n";
    }
}


