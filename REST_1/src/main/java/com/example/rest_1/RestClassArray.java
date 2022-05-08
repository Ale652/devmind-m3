package com.example.rest_1;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class restClassArray {

    private ArrayList<restClass> restClassArray;

    public ArrayList<restClass> getRestClassArray() {
        return restClassArray;
    }

    public void setRestClassArray(ArrayList<restClass> restClassArray) {
        this.restClassArray = restClassArray;
    }

    @Override
    public String toString() {
        return "restClassArray{" +
                "restClassArray=" + restClassArray +
                '}';
    }
}
