package com.example.project_version_30032022.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "readers")
//@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = "reviewuriPosted") // aded as per https://stackoverflow.com/questions/53540056/what-causes-spring-boot-fail-safe-cleanup-collections-to-occur
public class Reader {
    private String email;
    private String firstName;
    private String lastName;
    private String password;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
//    @JoinTable(
//            name = "readers_to_books_wish",
//            joinColumns = @JoinColumn(name = "id_reader"),
//            inverseJoinColumns = @JoinColumn(name = "id_book"))
    public Set<Book> wishList;


    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
//    @JoinTable(
//            name = "readers_to_books_read",
//            joinColumns = @JoinColumn(name = "id_reader"),
//            inverseJoinColumns = @JoinColumn(name = "id_book"))
    public Set<Book> readList;



    @OneToMany(mappedBy = "reader")
    @JsonIgnore
    private Set<Review> reviewuriPosted;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Reader reader = (Reader) o;
        return Objects.equals(id, reader.id) && this.getEmail().equals(reader.getEmail());
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, this.getEmail());
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Book> getWishList() {
        return wishList;
    }

    public void setWishList(Set<Book> wishList) {
        this.wishList = wishList;
    }

    public Set<Book> getReadList() {
        return readList;
    }

    public void setReadList(Set<Book> readList) {
        this.readList = readList;
    }

    public Set<Review> getReviewuriPosted() {
        return reviewuriPosted;
    }

    public void setReviewuriPosted(Set<Review> reviewuriPosted) {
        this.reviewuriPosted = reviewuriPosted;
    }
}
