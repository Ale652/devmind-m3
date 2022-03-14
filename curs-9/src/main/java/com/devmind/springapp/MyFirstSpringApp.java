package com.devmind.springapp;

import org.springframework.context.support.ClassPathXmlApplicationContext;


public class MyFirstSpringApp {
//    public static void main(String[] args) {
//        WisdomWordsService wisdomWordsService = new WisdomWordsService();
//        JavaTeacher javaTeacher = new JavaTeacher(wisdomWordsService);
//    }


    public static void main(String args[]) {
        // load the spring configuration file
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // retrieve bean from spring container
        ITeacher theTeacher = context.getBean("myTeacher", JavaTeacher.class);

        WisdomWordsService wService = new WisdomWordsService();

        // call methods on the bean
        System.out.println(theTeacher.getWisdom());


        // close the context
        context.close();
    }
}

