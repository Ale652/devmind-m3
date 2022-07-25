package com.example.project_version_30032022.services;

import com.example.project_version_30032022.controllers.dto.AddBookToReadListDTO;
import com.example.project_version_30032022.controllers.dto.AddBookToWishListDTO;
import com.example.project_version_30032022.controllers.request.AddReaderRequest;
import com.example.project_version_30032022.controllers.request.AddReviewRequest;
import com.example.project_version_30032022.controllers.request.GetReaderRequestByEmail;
import com.example.project_version_30032022.entities.Book;
import com.example.project_version_30032022.entities.Reader;
import com.example.project_version_30032022.entities.Review;
import com.example.project_version_30032022.repositories.BookRepository;
import com.example.project_version_30032022.repositories.ReaderRepository;
import com.example.project_version_30032022.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReaderService {

    @Autowired
   private ReaderRepository readerRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private BookRepository bookRepository;


    public List<Reader> getAllReaders(){
        return readerRepository.findAll();
    }

    public Optional<Reader> getReaderById(Long id){
        return readerRepository.findById(id);
    }

    public Reader getReaderByEmail(GetReaderRequestByEmail getReaderRequestByEmail){
        return readerRepository.findByEmail(getReaderRequestByEmail.getEmail()).get();
    }



    public void addReader(AddReaderRequest addReaderRequest){
        Reader reader = new Reader();
        reader.setEmail(addReaderRequest.getEmail());
        reader.setFirstName(addReaderRequest.getFirstName());
        reader.setLastName(addReaderRequest.getLastName());

        readerRepository.save(reader);
    }


    /* *
    Permite marcarea unei carti drept read (citita)

    * */
    public void addBookToReadListOfBooks(Long id, AddBookToReadListDTO addBookToReadListDTO){
        Book book = bookRepository.findById(addBookToReadListDTO.getId()).get();
        Reader reader = readerRepository.findById(id).get();
        reader.getReadList().add(book);
        readerRepository.save(reader); // TODO: cum fac update corect ?

    }


    public void addReviewToReadBook(AddReviewRequest addReviewRequest){
        Review review = new Review();
        Book book = bookRepository.findById(addReviewRequest.getBook_id()).get();
        Reader reader = readerRepository.findById(addReviewRequest.getReader_id()).get();

        review.setBook(book);
        review.setReader(reader);
        review.setRating(addReviewRequest.getRating());
        review.setPublishedTimestamp(addReviewRequest.getPublishedTimestamp());
        review.setComment(addReviewRequest.getComment());

        reviewRepository.save(review);

    }


    /*
    *     Permite adaugarea unei carti in wishList
     * */
    public void addBookToWishList(Long id, AddBookToWishListDTO addBookToWishListDTO){
        Book book = bookRepository.findById(addBookToWishListDTO.getId()).get();

        Reader reader = readerRepository.findById(id).get();
        reader.getWishList().add(book);
        readerRepository.save(reader);
    }


    public void addBookToReadList(Long id_reader, Long id_book){
        Book book = bookRepository.findById(id_book).get();

        Reader reader = readerRepository.findById(id_reader).get();
        reader.getReadList().add(book);
        readerRepository.save(reader);
    }

}
