package com.example.project_version_30032022.services;

import com.example.project_version_30032022.controllers.request.AddBookRequestTitleDescription;
import com.example.project_version_30032022.controllers.request.AddBookRequest;
import com.example.project_version_30032022.controllers.request.EditBookRequest;
import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Book;
import com.example.project_version_30032022.entities.StatusBook;
import com.example.project_version_30032022.repositories.AuthorRepository;
import com.example.project_version_30032022.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {


    @Autowired
   private  BookRepository bookRepository;

    @Autowired
    private AuthorRepository authorRepository;


    /*
*       Ofera o lista cu toate cartile din cadrul aplicatiei
        Permite filtrarea listei pe baza unui tip / gen de carte
* */
    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(Long id){
        return bookRepository.findById(id);
    }

    public List<Book> getBooksByType(String type){ return bookRepository.findByType(type);}

    public List<Book> getBooksByStatus(String status){ return bookRepository.findByStatus(status);}



    public void deleteBook(Long id){bookRepository.delete(bookRepository.getById(id));}

    /*
     *       Permite adaugarea unei noi carti
     * */

    public void addNewBook(AddBookRequest addBookRequest){
        Book book = new Book();
        Optional<Author> optional = authorRepository.findById(addBookRequest.getAuthor_id());
        book.setAuthor(optional.get());
        book.setDescription(addBookRequest.getDescription());
        book.setTitle(addBookRequest.getTitle());
        book.setType(addBookRequest.getType());
        book.setPublishedDate(addBookRequest.getPublishedDate());
        book.setStatus(StatusBook.UNPUBLISHED);

        bookRepository.save(book);
    }


    public void addNewBookTitleDescription(AddBookRequestTitleDescription addBookRequestTitleDescription){
        Book book = new Book();

        book.setDescription(addBookRequestTitleDescription.getDescription());
        book.setTitle(addBookRequestTitleDescription.getTitle());
        book.setStatus(StatusBook.UNPUBLISHED);

        bookRepository.save(book);
    }



    /*
    *       Permite modificarea, de catre autor sau de catre un utilizator de tip Administrator
    *       , a informatiilor despre carte
    *       (titlu, descriere, anul publicarii etc.)
     * */
    public void editBookInformation(EditBookRequest editBookRequest){
        Book book = bookRepository.findByAuthorAndTitle(editBookRequest.getAuthor_id(),editBookRequest.getTitle());
        book.setDescription(editBookRequest.getDescription());
        book.setTitle(editBookRequest.getTitle());
        book.setPublishedDate(editBookRequest.getPublishedDate());

        bookRepository.save(book);
    }

}
