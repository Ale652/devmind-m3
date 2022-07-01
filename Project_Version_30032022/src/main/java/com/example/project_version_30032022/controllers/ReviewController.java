package com.example.project_version_30032022.controllers;

import com.example.project_version_30032022.controllers.request.AddReaderRequest;
import com.example.project_version_30032022.controllers.request.AddReviewRequest;
import com.example.project_version_30032022.entities.Author;
import com.example.project_version_30032022.entities.Review;
import com.example.project_version_30032022.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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




}
