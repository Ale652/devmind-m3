package com.homework;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Homework {

    public static void main(String[] args) throws InterruptedException {


        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(TaskConfiguration.class);

//
//        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        Task firstTask = context.getBean("task", Task.class);
        Task secondTask = context.getBean("task", Task.class);
        Task thirdTask = context.getBean("task", Task.class);

        firstTask.run();

        context.close();
    }
}