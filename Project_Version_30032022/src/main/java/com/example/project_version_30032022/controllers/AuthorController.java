package com.example.project_version_30032022.controllers;


import com.example.project_version_30032022.controllers.request.AddAdministratorRequest;
import com.example.project_version_30032022.controllers.request.AddAuthorRequest;
import com.example.project_version_30032022.controllers.request.AddBookRequestTitleDescription;
import com.example.project_version_30032022.entities.Administrator;
import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Book;
import com.example.project_version_30032022.services.AuthorService;
import com.example.project_version_30032022.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin
@RestController
public class AuthorController {

    @Autowired
    AuthorService authorService;

    @Autowired
    BookService bookService;


    @PostMapping(path="/addAuthor")
    public void addNewAuthor(@RequestBody AddAuthorRequest addAuthorRequest){
        authorService.addAuthor(addAuthorRequest);
    }

    @GetMapping(path= "/getAllAuthors")
    public List<Author> getAllAuthors(){
        return authorService.getAllAuthors();
    }

    @GetMapping(path = "/author/{id}")
    public Author getAuthor(@PathVariable String id) {
        return authorService.getAuthorById(Long.valueOf(id)).get();
    }


    /*
    * Poate vedea o lista cu toate cartile din aplicatie
        Lista poate fi filtrata dupa tipul cartii (Comic Book, Fantasy, Classics, Historical Fiction etc.)
    * */
    @GetMapping(path= "/showAllBooksAuthor")
    public List<Book> showAllBooks(){
        return bookService.getAllBooks();
    }

    /*
     *     Poate vedea toate cartile publicate
     * */
    @GetMapping(path= "/getAllBooksByStatus/{status}/Author")
    public List<Book> showAllPublishedBooks(){
        return bookService.getBooksByStatus("PUBLISHED");
    }

    /*
     *     Poate adauga titlul unei noi carti, impreuna cu o descriere.
     *     Cererea de adaugare trebuie sa fie aprobata de catre un Administrator.
     *     Cartea va putea primi apoi review-uri de la cititori
     * */
    @PostMapping(path="/addBookTitleDescriptionAuthor")
    public void addNewBook(@RequestBody AddBookRequestTitleDescription addBookRequestTitleDescription){
        bookService.addNewBookTitleDescription(addBookRequestTitleDescription);
    }


}
