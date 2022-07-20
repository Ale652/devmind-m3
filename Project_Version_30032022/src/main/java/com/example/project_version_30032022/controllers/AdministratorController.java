package com.example.project_version_30032022.controllers;

import com.example.project_version_30032022.controllers.request.AddAdministratorRequest;
import com.example.project_version_30032022.controllers.request.AddBookRequestTitleDescription;
import com.example.project_version_30032022.entities.Administrator;
import com.example.project_version_30032022.entities.Book;
import com.example.project_version_30032022.repositories.BookRepository;
import com.example.project_version_30032022.services.AdministratorService;
import com.example.project_version_30032022.services.BookService;
import com.example.project_version_30032022.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class AdministratorController {

@Autowired
AdministratorService administratorService;

@Autowired
BookService bookService;

@Autowired
    ReviewService reviewService;

@PostMapping(path="/user/addAdministator")
public void addNewAdministrator(@RequestBody AddAdministratorRequest addAdministratorRequest){
    administratorService.addAdministrator(addAdministratorRequest);
}

@GetMapping(path= "/admin/getAllAdministrators")
public List<Administrator> getAllAdministators(){
    return administratorService.getAllAdministrators();
}


    @GetMapping(path = "/user/administrator/{id}")
    public Administrator getAdministrator(@PathVariable String id) {
        return administratorService.getAdministratorById(Long.valueOf(id)).get();
}



    /*
* Poate vedea o lista cu toate cartile din aplicatie
    Lista poate fi filtrata dupa tipul cartii (Comic Book, Fantasy, Classics, Historical Fiction etc.)
* */
    @GetMapping(path= "/admin/showAllBooksAdmin")
    public List<Book> showAllBooks(){
        return bookService.getAllBooks();
    }

    /*
    *     Poate aproba / respinge o cerere de adaugare a unei carti venita de la un Author
     * */
    @PutMapping(path="/admin/publishBook/{id}")
    public void publishBook(@PathVariable String id){
        administratorService.publishBook(Long.valueOf(id));
    }

    @PutMapping(path="/admin/rejectBook/{id}")
    public void rejectBook(@PathVariable String id){
        administratorService.rejectBook(Long.valueOf(id));
    }



    /*
    *     Poate adauga titlul  noi carti, impreuna cu o descriere, fara sa fie nevoie de aprobarea altui Administrator
            * */
    @PostMapping(path="/admin/addBookTitleDescriptionAdmin")
    public void addNewBook(@RequestBody AddBookRequestTitleDescription addBookRequestTitleDescription){
        bookService.addNewBookTitleDescription(addBookRequestTitleDescription);
    }

    /*
    *     Poate sterge review-urile care nu respecta regulile de conduita ale platformei
     * */
    @RequestMapping(path = "/admin/review/{id}/Admin", method = RequestMethod.DELETE)
    public void deleteReview(@PathVariable String id) {
        reviewService.deleteReview(Long.valueOf(id));
    }



}
