package com.example.project_version_30032022.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "readers")
@Data
@NoArgsConstructor
@AllArgsConstructor
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


}
