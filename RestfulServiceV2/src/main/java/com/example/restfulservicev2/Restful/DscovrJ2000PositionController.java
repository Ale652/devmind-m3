package com.example.restfulservicev2.Restful;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class DscovrJ2000PositionController {

    private final DscovrJ2000PositionRepository dscovrJ2000PositionRepository;


    public DscovrJ2000PositionController(DscovrJ2000PositionRepository dscovrJ2000PositionRepository) {
        this.dscovrJ2000PositionRepository = dscovrJ2000PositionRepository;
    }


    @RequestMapping(path = "/dscovrJ2000Position/{dscovrJ2000PositionId}/x", method = RequestMethod.PUT)
    public @ResponseBody
    ResponseEntity<DscovrJ2000PositionResponse> updateDscovrJ2000PositionX(@RequestBody Float x, @PathVariable Integer dscovrJ2000PositionId ){

        DscovrJ2000Position dscovrJ2000Position = dscovrJ2000PositionRepository.getById(dscovrJ2000PositionId);
        if(dscovrJ2000PositionId != null) {
            dscovrJ2000PositionRepository.updateX(x, dscovrJ2000PositionId);
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        else return  new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }
}
