import java.util.Objects;
import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Task{

    private String taskName;
    private Integer taskId;
    private Integer executionTime;

    static Integer numberOfTasks;

    private final static Random random = new Random();

    void init(){
        if(Objects.isNull(numberOfTasks)){
            numberOfTasks = 0;
        }
        numberOfTasks++;
        this.taskId = generateId();
        this.taskName = "Task" + this.taskId;
        this.executionTime = random.nextInt(1,21);

        System.out.println("init called");
    }

    void destroy(){
        System.out.println(" destroying");
        numberOfTasks--;
    }

    Integer generateId(){return numberOfTasks-1;}

    void run() throws InterruptedException{
        System.out.printf("Slleping for %d seconds", this.executionTime);
        TimeUnit.SECONDS.sleep(this.executionTime);
        System.out.println("run executed");

    }

    Integer generatedId(){return numberOfTasks - 1;}


}


