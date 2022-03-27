package configurareAdnotari;

import org.springframework.stereotype.Component;

@Component("Cat_add")
public class Cat_add implements IAnimal_add {


    public String makeSound(){
        return  "Cat sound add";
    }

}
