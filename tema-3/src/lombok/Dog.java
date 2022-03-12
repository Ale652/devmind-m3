package lombok;

import org.springframework.stereotype.Component;

@Data
public class Dog implements IAnimal {

    public String makeSound(){
        return "dog sound";
    }
}
