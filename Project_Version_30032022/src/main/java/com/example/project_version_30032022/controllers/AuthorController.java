package com.example.project_version_30032022.controllers;


import com.example.project_version_30032022.controllers.request.AddAdministratorRequest;
import com.example.project_version_30032022.controllers.request.AddAuthorRequest;
import com.example.project_version_30032022.entities.Administrator;
import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.services.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthorController {

    @Autowired
    AuthorService authorService;


    @PostMapping(path="/addAuthor")
    public void addNewAuthor(@RequestBody AddAuthorRequest addAuthorRequest){
        authorService.addAuthor(addAuthorRequest);
    }

    @GetMapping(path= "/getAllAuthors")
    public List<Author> getAllAuthors(){
        return authorService.getAllAuthors();
    }



    /*
    * Poate vedea o lista cu toate cartile din aplicatie
        Lista poate fi filtrata dupa tipul cartii (Comic Book, Fantasy, Classics, Historical Fiction etc.)
    * */
    public void showAllBooks(){}

    /*
     *     Poate vedea toate cartile publicate
     * */
    public void showAllPublishedBooks(){}

    /*
     *     Poate adauga titlul unei noi carti, impreuna cu o descriere.
     *     Cererea de adaugare trebuie sa fie aprobata de catre un Administrator.
     *     Cartea va putea primi apoi review-uri de la cititori
     * */
    public void addNewBook(){}

    /*
     *  [EXTRA] Poate incarca o poza de profil (avatar)ss
     * */
    public void uploadAvatarPicture(){}

    /*
     *     [EXTRA] Poate incarca un fisier PDF pentru a publica o carte noua spre a fi citita
     * */
    public void uploadPDFpublishBook(){}

}
