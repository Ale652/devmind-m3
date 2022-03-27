package lombok;

import org.springframework.stereotype.Component;

@Data
@Component
public class Cat implements IAnimal{
    private String animalName;

    public Cat(String name){
            this.animalName = name;
    } // How to call it in the main

    public Cat() {
        this.animalName = "Miki";
    }


    public String makeSound(){
        return this.animalName + "'s sound";
    }

}
