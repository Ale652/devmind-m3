package configurareAdnotari;

import org.springframework.stereotype.Component;

@Component("Dog_add")
public class Dog_add implements IAnimal_add {

    public String makeSound(){
        return "dog sound add";
    }
}
