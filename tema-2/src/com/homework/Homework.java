import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Homework {

    public static void main(String[] args) throws InterruptedException {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("context-homework.xml");

        Task firstTask = context.getBean("task", Task.class);
        Task secondTask = context.getBean("task", Task.class);
        Task thirdTask = context.getBean("task", Task.class);

        firstTask.run();

        context.close();
    }
}