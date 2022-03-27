package lombok;

import configurareAdnotari.AnimalsConfiguration;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainClass {
        public static void main(String[] args){
            AnnotationConfigApplicationContext myContext = new AnnotationConfigApplicationContext(AnimalsConfigurationl.class);

//            ClassPathXmlApplicationContext myContext = new ClassPathXmlApplicationContext("applicationContext.xml");
            IAnimal animal = myContext.getBean("cat",IAnimal.class);
            System.out.println(animal.makeSound());

            animal = myContext.getBean("dog",IAnimal.class);
            System.out.println(animal.makeSound());

            animal = myContext.getBean("mouse",IAnimal.class);
            System.out.println(animal.makeSound());

            Mouse mouse = myContext.getBean("mouse",Mouse.class);
            mouse.setMouseName("Miky");
            System.out.println("mouse name is: "+ mouse.getMouseName());

        }
}
