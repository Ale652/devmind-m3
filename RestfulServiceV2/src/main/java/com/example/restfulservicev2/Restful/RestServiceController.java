package com.example.restfulservicev2.Restful;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class RestServiceController {

    private final RootRepository rootRepository;

    @Autowired
    public RestServiceController(RootRepository rootRepository){
        this.rootRepository = rootRepository;
    }


    @PostMapping(path = "/nasaInsert")
    public @ResponseBody
    void insertNasaData(@RequestBody Root[] roots) {
        for (Root rootlass : roots) {
            System.out.println("New iteration : " + rootlass);
            rootRepository.save(rootlass);
        }
    }

}

