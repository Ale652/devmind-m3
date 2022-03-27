package lombok;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;


@Configuration
@ComponentScan("lombok")
public class AnimalsConfigurationl {


    @Bean
    public Cat cat() {
        return new Cat();
    }


    @Bean
    public Dog dog() {
        return new Dog();
}

    @Bean
    public Mouse mouse() {
        return new Mouse();
    }


}
