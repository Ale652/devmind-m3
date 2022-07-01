package com.example.project_version_30032022.services;

import com.example.project_version_30032022.controllers.request.AddAdministratorRequest;
import com.example.project_version_30032022.entities.Administrator;
import com.example.project_version_30032022.repositories.AdministratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdministratorService {

    @Autowired
    private AdministratorRepository administratorRepository;

    public List<Administrator> getAllAdministrators(){
        return administratorRepository.findAll();
    }

    public void addAdministrator(AddAdministratorRequest addAdministratorRequest){
        Administrator administrator = new Administrator();
        administrator.setEmail(addAdministratorRequest.getEmail());
        administrator.setFirstName(addAdministratorRequest.getFirstName());
        administrator.setLastName(addAdministratorRequest.getLastName());
        administrator.setPassword(addAdministratorRequest.getPassword()); // TODO: To Modyfiy

        administratorRepository.save(administrator);
    }


    /*
    *     Vede toate cererile de adaugarea a unor noi carti
     * */
    public void showAllRequestsForAddingNewBooks(){}

    /*
        Aproba / respinge cererile de adaugare a unor noi carti
        * */
    public void AcceptRejectAddingABook(){}

}
