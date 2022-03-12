package configurareAdnotari;

import org.springframework.context.support.ClassPathXmlApplicationContext;


public class MainClass_add {
        public static void main(String[] args){
            ClassPathXmlApplicationContext myContext = new ClassPathXmlApplicationContext("applicationContext.xml");
            IAnimal_add animal = myContext.getBean("Cat_add", IAnimal_add.class);
            System.out.println(animal.makeSound());

            animal = myContext.getBean("Dog_add", IAnimal_add.class);
            System.out.println(animal.makeSound());

            animal = myContext.getBean("Mouse_add", IAnimal_add.class);
            System.out.println(animal.makeSound());


        }
}
