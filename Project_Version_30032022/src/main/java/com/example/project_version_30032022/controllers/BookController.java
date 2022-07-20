package com.example.project_version_30032022.controllers;

import com.example.project_version_30032022.controllers.request.AddBookRequestTitleDescription;
import com.example.project_version_30032022.controllers.request.AddBookRequest;
import com.example.project_version_30032022.entities.Book;
import com.example.project_version_30032022.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class BookController {
    @Autowired
    BookService bookService;

    @PostMapping(path="/addBook")
    public void addNewBook(@RequestBody AddBookRequest addBookRequet){
        bookService.addNewBook(addBookRequet);
    }


    @PostMapping(path="/addBookTitleDescription")
    public void addNewBook(@RequestBody AddBookRequestTitleDescription addBookRequestTitleDescription){
        bookService.addNewBookTitleDescription(addBookRequestTitleDescription);
    }



    @GetMapping(path= "/getAllBooks")
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping(path = "/book/{id}")
    public Book getBook(@PathVariable String id) {
        return bookService.getBookById(Long.valueOf(id)).get();
    }

    @GetMapping(path= "/getAllBooksByType/{type}")
    public List<Book> getAllBooksByType(@PathVariable String type){
        return bookService.getBooksByType(type);
    }

    @GetMapping(path= "/getAllBooksByStatus/{status}")
    public List<Book> getAllBooksByStatus(@PathVariable String status){
        return bookService.getBooksByStatus(status);
    }

    @RequestMapping(path = "/book/{id}", method = RequestMethod.DELETE)
    public void deleteBook(@PathVariable String id) {
         bookService.deleteBook(Long.valueOf(id));
    }


}
