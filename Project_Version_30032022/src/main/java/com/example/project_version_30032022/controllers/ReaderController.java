package com.example.project_version_30032022.controllers;

import com.example.project_version_30032022.controllers.dto.AddBookToWishListDTO;
import com.example.project_version_30032022.controllers.request.AddAuthorRequest;
import com.example.project_version_30032022.controllers.request.AddReaderRequest;
import com.example.project_version_30032022.controllers.request.AddReviewRequest;
import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Book;
import com.example.project_version_30032022.entities.Reader;
import com.example.project_version_30032022.entities.Review;
import com.example.project_version_30032022.services.BookService;
import com.example.project_version_30032022.services.ReaderService;
import com.example.project_version_30032022.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin
@RestController
public class ReaderController {

@Autowired
    ReaderService readerService;

    @Autowired
    BookService bookService;

    @Autowired
    ReviewService reviewService;



    @PostMapping(path="/addReader")
    public void addNewReader(@RequestBody AddReaderRequest addReaderRequest){
        readerService.addReader(addReaderRequest);
    }

    @GetMapping(path= "/getAllReaders")
    public List<Reader> getAllReaders(){
        return readerService.getAllReaders();
    }


    @GetMapping(path = "/reader/{id}")
    public @ResponseBody
    Reader getAuthor(@PathVariable String id) {
        return readerService.getReaderById(Long.valueOf(id)).get();
    }


    /*
    *     Poate vedea o lista cu toate cartile din aplicatie
        Lista poate fi filtrata dupa tipul cartii (Comic Book, Fantasy, Classics, Historical Fiction etc.)
    * */
    @GetMapping(path= "/showAllBooksReader")
    public List<Book> showAllBooks(){
        return bookService.getAllBooks();
    }


    /*
    *     Poate adauga o carte in lista de carti citite
     * */
    @PostMapping(path="/addBookToReadListOfBooks")
    public void addBookToReadListOfBooks(@RequestBody AddReaderRequest addReaderRequest){
        readerService.addReader(addReaderRequest);
    }

    /*
    *     Poate adauga un review unei carti citite
     * */
    @PostMapping(path="/addReviewReader")
    public void addReviewToBook(@RequestBody AddReviewRequest addReviewRequest){
        readerService.addReviewToReadBook(addReviewRequest);
    }


    /*
    *     Poate adauga o carte in wishList
     * */

    @PostMapping(path="/addBookToWishList/{readerID}")
    public void addBookToWishList(@RequestBody AddBookToWishListDTO addBookToWishListDTO,@PathVariable String readerID){
        readerService.addBookToWishList(Long.valueOf(readerID), addBookToWishListDTO);
    }


}
