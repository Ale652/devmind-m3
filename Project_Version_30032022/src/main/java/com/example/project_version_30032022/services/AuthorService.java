package com.example.project_version_30032022.services;

import com.example.project_version_30032022.controllers.request.AddAuthorRequest;
import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {

    @Autowired
    private AuthorRepository authorRepository;

    public List<Author> getAllAuthors(){
        return authorRepository.findAll();
    }

    public Optional<Author> getAuthorById(Long id){
        return authorRepository.findById(id);
    }


    public void addAuthor(AddAuthorRequest addAuthorRequest){
        Author author = new Author();
        author.setEmail(addAuthorRequest.getEmail());
        author.setFirstName(addAuthorRequest.getFirstName());
        author.setLastName(addAuthorRequest.getLastName());

        authorRepository.save(author);
    }


}
