package models;

import javax.persistence.*;

public class Product {

    // Helping fields
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // mark the relation one-to-many between Order and Products
    @ManyToOne
    @JoinColumn(name = "id_order")
    private models.Order Order;

    // mark the relation one-to-many between Supplier and Products
    @ManyToOne
    @JoinColumn(name = "id_supplier")
    private Supplier Supplier;

    // Fields associated with what is in orders##.xml && suppliername##.xml
    @Column(name = "description")
    private String description;
    @Column(name = "gtin")
    private String gtin;
    @Column(name = "price")
    private Double price;
    private String supplier;
    private String orderid;



    // Gettrs and Setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getGtin() {
        return gtin;
    }

    public void setGtin(String gtin) {
        this.gtin = gtin;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    public models.Order getOrder() {
        return Order;
    }

    public void setOrder(models.Order order) {
        this.Order = order;
    }

    public String getOrderid() {
        return orderid;
    }

    public void setOrderid(String orderid) {
        this.orderid = orderid;
    }

    public void setSupplier(models.Supplier supplier) {
        Supplier = supplier;
    }


    // ToString

    @Override
    public String toString() {
        return "\n Product{" +
                "description='" + description + '\'' +
                ", gtin='" + gtin + '\'' +
                ", price=" + price +
                ", supplier='" + supplier + '\'' +
                '}'+ "\n";
    }
}
