package com.Homework;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import java.util.Objects;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import javax.annotation.*;


@Component("myTask")
@Scope("prototype")
public class Task{

    private String taskName;
    private Integer taskId;
    private static Integer executionTime = 1;

    private static int numberOfTasks;

    private final static Random random = new Random();

    @PostConstruct
    private void init(){
        numberOfTasks++;
        this.taskId = generateId();
        this.taskName = "com.Homework.Task" + this.taskId;
        this.executionTime = random.nextInt(1,21);

        System.out.println("init called on "+this.taskName+" "+this.taskId);
    }

    @PreDestroy
    private void destroy(){
        System.out.println(" destroying" +this.taskName);
        numberOfTasks--;
    }

    Integer generateId(){return numberOfTasks;}

    void run() throws InterruptedException{
        System.out.printf("Slleping for %d seconds \n", this.executionTime);
        TimeUnit.SECONDS.sleep(this.executionTime);
        System.out.println("run executed");

    }

    Integer generatedId(){return numberOfTasks;}


}


