package configurareAdnotari;

import lombok.Mouse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;


@Configuration
@ComponentScan("configurareAdnotari")
public class AnimalsConfiguration {

    @Bean
    public Cat_add cat_add() {
        return new Cat_add();
    }


        @Bean
        public Dog_add dog_add() {
            return new Dog_add();
    }

    @Bean
    public Mouse_add mouse_add() {
        return new Mouse_add();
    }


}
