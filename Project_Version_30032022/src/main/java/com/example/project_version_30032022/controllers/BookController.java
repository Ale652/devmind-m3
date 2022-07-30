package com.example.project_version_30032022.controllers;

import com.example.project_version_30032022.controllers.request.AddBookRequestTitleDescription;
import com.example.project_version_30032022.controllers.request.AddBookRequest;
import com.example.project_version_30032022.controllers.request.EditBookRequest;
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

    @GetMapping(path= "/getAllBooksByIdAuthor/{id_author}")
    public List<Book> getAllBooksByIdAuthor(@PathVariable Long id_author){
        return bookService.getBooksByIdAuthor(id_author);
    }

    @GetMapping(path= "/getAllBooksByIdAuthorAndStatus/{id_author}/{status}")
    public List<Book> getAllBooksByIdAuthorAndStatus(@PathVariable Long id_author, @PathVariable String status){
        return bookService.getBooksByIdAuthorAndStatus(id_author, status);
    }


    @RequestMapping(path = "/book/{id}", method = RequestMethod.DELETE)
    public void deleteBook(@PathVariable String id) {
         bookService.deleteBook(Long.valueOf(id));
    }


    @PutMapping(path="/editBook/{id}")
        public void editBook(@RequestBody EditBookRequest editBookRequest,@PathVariable String id){
//            bookService.editBookInformation(editBookRequest);
              bookService.editBook(Long.valueOf(id), editBookRequest);
    }


    @GetMapping(path= "/getAllWishedBooksForReader/{id}")
    public List<Book> getAllWishedBooksForReader(@PathVariable String id){
        return bookService.getWishListForReader(Long.valueOf(id));
    }

    @GetMapping(path= "/getAllReadBooksForReader/{id}")
    public List<Book> getAllReadBooksForReader(@PathVariable String id){
        return bookService.getReadListForReader(Long.valueOf(id));
    }

    @RequestMapping(path = "/removeFromWishedBookForReader/{id_reader}/{id_book}", method = RequestMethod.DELETE)
    public void removeBookFromWishList(@PathVariable String id_reader, @PathVariable String id_book){
         bookService.removeBookFromWishList(Long.valueOf(id_reader),Long.valueOf(id_book));
    }

    @RequestMapping(path = "/removeFromReadBookForReader/{id_reader}/{id_book}", method = RequestMethod.DELETE)
    public void removeBookFromReadList(@PathVariable String id_reader, @PathVariable String id_book){
        bookService.removeBookFromReadList(Long.valueOf(id_reader),Long.valueOf(id_book));
    }



}
