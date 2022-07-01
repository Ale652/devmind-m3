package com.example.project_version_30032022.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Review {
   private  String comment ;
    private String rating;
    private String publishedTimestamp;
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "id_reader")
    private Reader reader;

    @ManyToOne
    @JoinColumn(name = "id_book")
    private Book book;


}
