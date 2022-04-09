package com.example.springbootex1;

public class Mathc {
    Integer firstNumber;
    Integer secondNumber;
    String operation;

    public Integer getFirstNumber() {
        return firstNumber;
    }

    public void setFirstNumber(Integer firstNumber) {
        this.firstNumber = firstNumber;
    }

    public Integer getSecondNumber() {
        return secondNumber;
    }

    public void setSecondNumber(Integer secondNumber) {
        this.secondNumber = secondNumber;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public Mathc(Integer firstNumber, Integer secondNumber, String operation) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operation = operation;
    }

    @Override
    public String toString() {
        return "Mathc{" +
                "firstNumber=" + firstNumber +
                ", secondNumber=" + secondNumber +
                ", operation='" + operation + '\'' +
                '}';
    }
}
