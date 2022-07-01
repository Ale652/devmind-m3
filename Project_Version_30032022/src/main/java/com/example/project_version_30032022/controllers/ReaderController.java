package com.example.project_version_30032022.controllers;

import com.example.project_version_30032022.controllers.request.AddAuthorRequest;
import com.example.project_version_30032022.controllers.request.AddReaderRequest;
import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Reader;
import com.example.project_version_30032022.services.ReaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReaderController {

@Autowired
    ReaderService readerService;


    @PostMapping(path="/addReader")
    public void addNewReader(@RequestBody AddReaderRequest addReaderRequest){
        readerService.addReader(addReaderRequest);
    }

    @GetMapping(path= "/getAllReaders")
    public List<Reader> getAllReaders(){
        return readerService.getAllReaders();
    }


    /*
    *     Poate vedea o lista cu toate cartile din aplicatie
        Lista poate fi filtrata dupa tipul cartii (Comic Book, Fantasy, Classics, Historical Fiction etc.)
    * */
    public void showAllBooks(){}

    /*
    *     Poate adauga o carte in lista de carti citite
     * */
    public void addBookToReadListOfBooks(){}

    /*
    *     Poate adauga un review unei carti citite
     * */
    public void addReviewToBook(){}

    /*
    *     Poate adauga o carte in wishList
     * */
    public void addBookToWishList(){}

    /*
    [EXTRA] Poate incarca o poza de profil (avatar)
    * */
    public void uploadAvatarPicture(){}

}
