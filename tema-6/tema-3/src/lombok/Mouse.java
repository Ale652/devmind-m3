package lombok;

import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
public class Mouse implements IAnimal {

    private String mouseName;

    public String makeSound(){
        return "mouse sound";
    }
}