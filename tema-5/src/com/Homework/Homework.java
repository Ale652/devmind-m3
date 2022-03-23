package com.Homework;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Homework {

    public static void main(String[] args) throws InterruptedException {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        Task firstTask = context.getBean("myTask", Task.class);
        Task secondTask = context.getBean("myTask", Task.class);
        Task thirdTask = context.getBean("myTask", Task.class);

        firstTask.run();

        context.close();
    }
}