package com.example.project_version_30032022.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = "listBooksAuthor")
public class Author {
    private String email;
    private String firstName;
    private String lastName;
    private String password;


    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private Set<Book> listBooksAuthor;


//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        Author author = (Author) o;
//        return Objects.equals(email, author.email) && Objects.equals(firstName, author.firstName) && Objects.equals(lastName, author.lastName) && Objects.equals(password, author.password) && Objects.equals(id, author.id) && Objects.equals(listBooksAuthor, author.listBooksAuthor);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(email, firstName, lastName, password, id, listBooksAuthor);
//    }
}
