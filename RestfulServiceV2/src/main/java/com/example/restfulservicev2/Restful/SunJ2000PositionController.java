package com.example.restfulservicev2.Restful;

import org.springframework.web.bind.annotation.*;

@RestController
public class SunJ2000PositionController {

    private final SunJ2000PositionRepository sunJ2000PositionRepository;

    public SunJ2000PositionController(SunJ2000PositionRepository sunJ2000PositionRepository) {
        this.sunJ2000PositionRepository = sunJ2000PositionRepository;
    }

    @RequestMapping(path = "/sunJ2000PositionController/{deleteSunJ2000PositionRepositoryId}", method = RequestMethod.DELETE)
    public @ResponseBody
    void deleteSunJ2000PositionRepository(@PathVariable Integer deleteSunJ2000PositionRepositoryId ){
        sunJ2000PositionRepository.deleteSunJ2000PositionRepository(deleteSunJ2000PositionRepositoryId);
    }


}
