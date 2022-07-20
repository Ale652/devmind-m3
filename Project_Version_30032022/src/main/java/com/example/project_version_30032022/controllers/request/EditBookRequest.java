package com.example.project_version_30032022.controllers.request;

import lombok.Data;

@Data
public class EditBookRequest {
    private String title;
    private String description;
    private String publishedDate;
    private Long author_id;
}
