package com.example.project_version_30032022.controllers;

import com.example.project_version_30032022.controllers.request.AddAuthorRequest;
import com.example.project_version_30032022.controllers.request.AddBookRequet;
import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Book;
import com.example.project_version_30032022.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {
    @Autowired
    BookService bookService;

    @PostMapping(path="/addBook")
    public void addNewBook(@RequestBody AddBookRequet addBookRequet){
        bookService.addNewBook(addBookRequet);
    }


    @GetMapping(path= "/getAllBooks")
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }


}
