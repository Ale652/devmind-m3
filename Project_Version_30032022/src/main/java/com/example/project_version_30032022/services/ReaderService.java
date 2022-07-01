package com.example.project_version_30032022.services;

import com.example.project_version_30032022.controllers.request.AddReaderRequest;
import com.example.project_version_30032022.entities.Reader;
import com.example.project_version_30032022.repositories.ReaderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReaderService {

    @Autowired
   private ReaderRepository readerRepository;


    public List<Reader> getAllReaders(){
        return readerRepository.findAll();
    }

    public void addReader(AddReaderRequest addReaderRequest){
        Reader reader = new Reader();
        reader.setEmail(addReaderRequest.getEmail());
        reader.setFirstName(addReaderRequest.getFirstName());
        reader.setLastName(addReaderRequest.getLastName());
        reader.setPassword(addReaderRequest.getPassword());

        readerRepository.save(reader);
    }


    /* *
    Permite marcarea unei carti drept read (citita)

    * */
    public void addBookToReadListOfBooks(){}

    /*
    *     Permite adaugarea unei carti in wishList
     * */
    public void addBookToWishList(){}

}
