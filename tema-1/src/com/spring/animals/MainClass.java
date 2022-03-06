package com.spring.animals;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainClass {
        public static void main(String[] args){
            ClassPathXmlApplicationContext myContext = new ClassPathXmlApplicationContext("applicationContext.xml");
            IAnimal animal = myContext.getBean("myCat",IAnimal.class);
            System.out.println(animal.makeSound());

            animal = myContext.getBean("myDog",IAnimal.class);
            System.out.println(animal.makeSound());

            animal = myContext.getBean("myMouse",IAnimal.class);
            System.out.println(animal.makeSound());

//            animal = myContext.getBean("myCat2",IAnimal.class);
//            System.out.println(animal.makeSound());

        }
}
