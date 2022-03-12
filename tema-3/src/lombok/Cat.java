package lombok;

@Data
public class Cat implements IAnimal{
    private String animalName;

    public Cat(String name){
            this.animalName = name;
    }


    public String makeSound(){
        return this.animalName + "'s sound";
    }

}
