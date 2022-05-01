package com.example.sacom_v1.entity;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "suppliers")
public class Supplier {

    // Helping fields
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    // Fields associated with what is in suppliername##.xml

    // mark the relation one-to-many between Supplier and Products
    @OneToMany(mappedBy = "Supplier")
    private List<Product> listOfProductsOnSupplier  = new ArrayList<>();



    // Gettrs and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<Product> getListOfProductsOnSupplier() {
        return listOfProductsOnSupplier;
    }

    public void setListOfProductsOnSupplier(List<Product> listOfProductsOnSupplier) {
        this.listOfProductsOnSupplier = listOfProductsOnSupplier;


    }
}
