package lombok;

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

            Mouse mouse = myContext.getBean("myMouse",Mouse.class);
            mouse.setMouseName("Miky");
            System.out.println("mouse name is: "+ mouse.getMouseName());

        }
}
