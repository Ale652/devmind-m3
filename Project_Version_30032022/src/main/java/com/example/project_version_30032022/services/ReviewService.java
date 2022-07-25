package com.example.project_version_30032022.services;

import com.example.project_version_30032022.controllers.request.AddReviewRequest;
import com.example.project_version_30032022.entities.Author;
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
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    ReaderRepository readerRepository;

    @Autowired
    BookRepository bookRepository;

    @Autowired
    ReviewService reviewService;

    public List<Review> getAllReviews(){
        return reviewRepository.findAll();
    }

    public Optional<Review> getReviewById(Long id){
        return reviewRepository.findById(id);
    }

    /*
     Permite modificarea / stergerea unui review de catre persoana care l-a adaugat sau de catre administrator

    * */
    public void deleteReview(Long id){reviewRepository.delete(reviewRepository.getById(id));}

    /*
     *     Permite adaugarea unui review pentru o carte
     * */
    public void addReview(AddReviewRequest addReviewRequest){
        Review review = new Review();

        Optional<Book> optional_book = bookRepository.findById(addReviewRequest.getBook_id());
        review.setBook(optional_book.get());

        Optional<Reader> optional_reader = readerRepository.findById(addReviewRequest.getReader_id());
        review.setReader(optional_reader.get());

        review.setComment(addReviewRequest.getComment());
        review.setPublishedTimestamp(addReviewRequest.getPublishedTimestamp());
        review.setRating(addReviewRequest.getRating());


        reviewRepository.save(review);

        // update new value in Book on global_rating with each review added
        Long numberOfReviewsForThisBook = Long.valueOf(reviewRepository.getNumberReviewsForBook(optional_book.get().getId()));
        System.out.println("number of reviews : " + numberOfReviewsForThisBook);
        Long newGlobalRating = (optional_book.get().getGlobal_rating() * (numberOfReviewsForThisBook-1L) + addReviewRequest.getRating())/numberOfReviewsForThisBook;
        System.out.println("new rating : " + newGlobalRating);
        System.out.println("old global rating : " + optional_book.get().getGlobal_rating());
        System.out.println("rating from UI : " + addReviewRequest.getRating());
        optional_book.get().setGlobal_rating(newGlobalRating);
        bookRepository.save(optional_book.get());
    }

}
