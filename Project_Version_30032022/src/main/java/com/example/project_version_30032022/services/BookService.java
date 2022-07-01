package com.example.project_version_30032022.services;

import com.example.project_version_30032022.controllers.request.AddBookRequet;
import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Book;
import com.example.project_version_30032022.repositories.AuthorRpository;
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
    private AuthorRpository authorRepository;

    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }



    public void addNewBook(AddBookRequet addBookRequet){
        Book book = new Book();
        Optional<Author> optional = authorRepository.findById(addBookRequet.getAuthor_id());
        book.setAuthor(optional.get());
        book.setDescription(addBookRequet.getDescription());
        book.setTitle(addBookRequet.getTitle());
        book.setType(addBookRequet.getType());
        book.setPublishedDate(addBookRequet.getPublishedDate());

        bookRepository.save(book);
    }



    /*
    *       Ofera o lista cu toate cartile din cadrul aplicatiei
            Permite filtrarea listei pe baza unui tip / gen de carte
    * */
    public void showAllBooks(){}

    /*
    *       Permite adaugarea unei noi carti
     * */
    public void addNewBook(){}

    /*
    *       Permite modificarea, de catre autor sau de catre un utilizator de tip Administrator
    *       , a informatiilor despre carte
    *       (titlu, descriere, anul publicarii etc.)
     * */
    public void editBookInformation(){}

    /*
        [EXTRA] Permite incarcarea unei carti in format PDF de catre un autor
* */
    public void uploadPDFpublishBook(){}

}
