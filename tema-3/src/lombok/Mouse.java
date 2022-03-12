package lombok;

@Getter
@Setter
public class Mouse implements IAnimal {

    private String mouseName;

    public String makeSound(){
        return "mouse sound";
    }
}