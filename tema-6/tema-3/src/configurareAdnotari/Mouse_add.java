package configurareAdnotari;

import org.springframework.stereotype.Component;

@Component("Mouse_add")
public class Mouse_add implements IAnimal_add {

    public String makeSound(){
        return "mouse sound add";
    }
}