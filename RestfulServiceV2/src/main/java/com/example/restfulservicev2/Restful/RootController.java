package com.example.restfulservicev2.Restful;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {

    private final RootRepository rootRepository;

    public RootController(RootRepository rootRepository) {
        this.rootRepository = rootRepository;
    }

    @PostMapping(path = "/root")
    public @ResponseBody
    void insertRoot(@RequestBody Root root) {
        rootRepository.save(root);
    }
}
