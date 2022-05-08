package com.example.restfulservicev2.Restful;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LunarJ2000PositionController {

    private final LunarJ2000PositionRepository lunarJ2000PositionRepository;

    public LunarJ2000PositionController(LunarJ2000PositionRepository lunarJ2000PositionRepository) {
        this.lunarJ2000PositionRepository = lunarJ2000PositionRepository;
    }


    @PostMapping(path = "/lunarJ2000Position")
    public @ResponseBody
    void insertRoot(@RequestBody LunarJ2000Position lunarJ2000Position) {
        lunarJ2000PositionRepository.save(lunarJ2000Position);
    }
}
