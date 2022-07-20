package com.example.project_version_30032022.services;

import com.example.project_version_30032022.controllers.request.AddAdministratorRequest;
import com.example.project_version_30032022.entities.Administrator;
import com.example.project_version_30032022.entities.Book;
import com.example.project_version_30032022.entities.StatusBook;
import com.example.project_version_30032022.repositories.AdministratorRepository;
import com.example.project_version_30032022.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdministratorService {

    @Autowired
    private AdministratorRepository administratorRepository;

    @Autowired
    private BookRepository bookRepository;

    public List<Administrator> getAllAdministrators(){
        return administratorRepository.findAll();
    }

    public Optional<Administrator> getAdministratorById(Long id){
        return administratorRepository.findById(id);
    }

    public void addAdministrator(AddAdministratorRequest addAdministratorRequest){
        Administrator administrator = new Administrator();
        administrator.setEmail(addAdministratorRequest.getEmail());
        administrator.setFirstName(addAdministratorRequest.getFirstName());
        administrator.setLastName(addAdministratorRequest.getLastName());

        administratorRepository.save(administrator);
    }



    /*
    Aproba / respinge cererile de adaugare a unor noi carti
    * */
    public void publishBook(Long id){
        Book book = bookRepository.findById(id).get();
        book.setStatus(StatusBook.PUBLISHED);
    }
    public void rejectBook(Long id){
        Book book = bookRepository.findById(id).get();
        book.setStatus(StatusBook.REJECTED);
    }


    /*
    *     Vede toate cererile de adaugarea a unor noi carti
     * */
    public List<Book> showAllRequestsForAddingNewBooks(){
        return bookRepository.findByStatus("0");

    }



}
