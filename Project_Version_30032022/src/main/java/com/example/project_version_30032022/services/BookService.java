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

import java.util.ArrayList;
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

    public List<Book> getBooksByIdAuthor(Long id_author){ return bookRepository.findByIdAuthor(id_author);}

    public List<Book> getBooksByIdAuthorAndStatus(Long id_author, String status){
        return bookRepository.findByIdAuthorAndStatus(id_author, status);}





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
        book.setGlobal_rating(0L);
        book.setStatus(0);

        bookRepository.save(book);
    }


    public void addNewBookTitleDescription(AddBookRequestTitleDescription addBookRequestTitleDescription){
        Book book = new Book();

        book.setDescription(addBookRequestTitleDescription.getDescription());
        book.setTitle(addBookRequestTitleDescription.getTitle());
        book.setStatus(0);

        bookRepository.save(book);
    }


    public void editBook(Long id, EditBookRequest editBookRequest){
        Book book = bookRepository.getById(id);
        book.setDescription(editBookRequest.getDescription());
        book.setTitle(editBookRequest.getTitle());
        book.setType(editBookRequest.getType());
        book.setPublishedDate(editBookRequest.getPublishedDate());


        bookRepository.save(book);}


    /*
    *       Permite modificarea, de catre autor sau de catre un utilizator de tip Administrator
    *       , a informatiilor despre carte
    *       (titlu, descriere, anul publicarii etc.)
     * */
//    public void editBookInformation(EditBookRequest editBookRequest){
//        Book book = bookRepository.findByAuthorAndTitle(editBookRequest.getAuthor_id(),editBookRequest.getTitle());
//        book.setDescription(editBookRequest.getDescription());
//        book.setTitle(editBookRequest.getTitle());
//        book.setType(editBookRequest.getType());
//        book.setPublishedDate(editBookRequest.getPublishedDate());
//
//        bookRepository.save(book);
//    }


    public List<Book> getWishListForReader(Long id){
        List<Long> ListIDsBooksWishList= bookRepository.getIDsBooksWishList(id);

        List<Book> ListWishListForReader = new ArrayList<Book>();

        for(Long i : ListIDsBooksWishList){
            System.out.println("Book id : " + i);
            ListWishListForReader.add(bookRepository.findById(i).get());
        }

        return ListWishListForReader;
    }


    public List<Book> getReadListForReader(Long id){
        List<Long> ListIDsBooksReadList= bookRepository.getIDsBooksReadList(id);

        List<Book> ListReadListForReader = new ArrayList<Book>();

        for(Long i : ListIDsBooksReadList){
            System.out.println("Book id : " + i);
            ListReadListForReader.add(bookRepository.findById(i).get());
        }

        return ListReadListForReader;
    }


    public void removeBookFromWishList(Long id_reader, Long id_book){
        bookRepository.removeBookFromWishList(id_reader, id_book);
    }

    public void removeBookFromReadList(Long id_reader, Long id_book){
        bookRepository.removeBookFromReadList(id_reader, id_book);
    }





}
