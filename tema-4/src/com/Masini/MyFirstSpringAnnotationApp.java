package com.Masini;

import org.springframework.context.support.ClassPathXmlApplicationContext;


public class MyFirstSpringAnnotationApp {
    public static void main(String[] args) {
        // citeste fisierul de configurare
        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");
        // obtine -ul din container-ul de spring
        Test test = context.getBean("test", Test.class);
        // foloseste functionalitatile bean-ului
        test.printTest();
        // inchide contextul
        test.autocar.travel();



        TestAutomobil testautomobil = context.getBean("testAutomobil",TestAutomobil.class);
        testautomobil.test();
        context.close();
    }

}
