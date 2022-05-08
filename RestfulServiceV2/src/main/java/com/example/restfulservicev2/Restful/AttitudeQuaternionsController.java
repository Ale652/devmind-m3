package com.example.restfulservicev2.Restful;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class AttitudeQuaternionsController {

    private final AttitudeQuaternionsRepository attitudeQuaternionsRepository;

    public AttitudeQuaternionsController(AttitudeQuaternionsRepository attitudeQuaternionsRepository) {
        this.attitudeQuaternionsRepository = attitudeQuaternionsRepository;
    }


    @GetMapping(path = "/attitudeQuaternions/all")
    public @ResponseBody
    Iterable<AttitudeQuaternions> getAttitudeQuaternions() {
        return attitudeQuaternionsRepository.findAll();
    }

    @GetMapping(path = "/attitudeQuaternionsRepository/{id}")
    public @ResponseBody
    Optional<AttitudeQuaternions> getAttitudeQuaternionsById(@PathVariable Integer id) {
        return attitudeQuaternionsRepository.findById(id);
    }

}
