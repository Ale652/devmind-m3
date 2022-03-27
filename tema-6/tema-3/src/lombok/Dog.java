package lombok;

import org.springframework.stereotype.Component;

@Data
@Component
public class Dog implements IAnimal {

    public String makeSound(){
        return "dog sound";
    }
}
