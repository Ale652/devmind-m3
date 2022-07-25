package com.example.project_version_30032022.controllers;

import com.example.project_version_30032022.controllers.request.AddReaderRequest;
import com.example.project_version_30032022.controllers.request.AddReviewRequest;
import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Reader;
import com.example.project_version_30032022.entities.Review;
import com.example.project_version_30032022.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin
@RestController
public class ReviewController {

    @Autowired
    ReviewService reviewService;



    @PostMapping(path="/addReview")
    public void addNewReview(@RequestBody AddReviewRequest addReviewRequest){
        reviewService.addReview(addReviewRequest);
    }

    @GetMapping(path= "/getAllReviews")
    public List<Review> getAllReviews(){
        return reviewService.getAllReviews();
    }


    @GetMapping(path = "/review/{id}")
    public @ResponseBody
    Review getReviewById(@PathVariable String id) {
        return reviewService.getReviewById(Long.valueOf(id)).get();
    }

    @RequestMapping(path = "/review/{id}", method = RequestMethod.DELETE)
    public void deleteReview(@PathVariable String id) {
        reviewService.deleteReview(Long.valueOf(id));
    }



}
