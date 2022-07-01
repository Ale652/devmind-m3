package com.example.project_version_30032022.services;

import com.example.project_version_30032022.controllers.request.AddAuthorRequest;
import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.repositories.AuthorRpository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {

    @Autowired
    private AuthorRpository authorRepository;

    public List<Author> getAllAuthors(){
        return authorRepository.findAll();
    }


    public void addAuthor(AddAuthorRequest addAuthorRequest){
        Author author = new Author();
        author.setEmail(addAuthorRequest.getEmail());
        author.setFirstName(addAuthorRequest.getFirstName());
        author.setLastName(addAuthorRequest.getLastName());
        author.setPassword(addAuthorRequest.getPassword()); // TODO: To Modyfiy

        authorRepository.save(author);
    }

    public Optional<Author> findById(Long id){
        return authorRepository.findById(id);
    }

}
