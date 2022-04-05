package com.example.rest_1;


import java.util.ArrayList;

public class restClass{
    private String courseName;
    private Trainer trainer;
    private String online;
    private ArrayList<Day> courseDays;

    public String getCourseName() {
        return courseName;
    }



    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public Trainer getTrainer() {
        return trainer;
    }

    public void setTrainer(Trainer trainer) {
        this.trainer = trainer;
    }

    public String getOnline() {
        return online;
    }

    public void setOnline(String online) {
        this.online = online;
    }

    public ArrayList<Day> getCourseDays() {
        return courseDays;
    }

    @Override
    public String toString() {
        return "restClass{" +
                "courseName='" + courseName + '\'' +
                ", trainer=" + trainer +
                ", online='" + online + '\'' +
                ", courseDays=" + courseDays +
                '}'+"\n";
    }

    public void setCourseDays(ArrayList<Day> courseDays) {
        this.courseDays = courseDays;


    }
}
