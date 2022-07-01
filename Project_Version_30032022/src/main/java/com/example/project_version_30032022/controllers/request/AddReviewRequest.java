package com.example.project_version_30032022.controllers.request;

import lombok.Data;

@Data
public class AddReviewRequest {
    private  String comment ;
    private String rating;
    private String publishedTimestamp;
    private Long book_id;
    private Long reader_id;
}
