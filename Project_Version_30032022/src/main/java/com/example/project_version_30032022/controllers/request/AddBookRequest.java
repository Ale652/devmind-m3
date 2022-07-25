package com.example.project_version_30032022.controllers.request;

import lombok.Data;

@Data
public class AddBookRequest {
    private String title;
    private String description;
    private String publishedDate;
    private String type;
    private Long global_rating;
    private Long author_id;
}
