package com.example.restfulservicev2.Restful;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CentroidCoordinatesController {

    private final CentroidCoordinatesRepository centroidCoordinatesRepository;

    public CentroidCoordinatesController(CentroidCoordinatesRepository centroidCoordinatesRepository) {
        this.centroidCoordinatesRepository = centroidCoordinatesRepository;
    }

    @RequestMapping(path = "/centroidCoordinates/{centroidCoordinatesId}/lat", method = RequestMethod.PUT)
    public @ResponseBody
    ResponseEntity<CentroidCoordinatesResponse> updateCentroidCoordinatesLat(@RequestBody Float lat, @PathVariable Integer centroidCoordinatesId ){

        CentroidCoordinates centroidCoordinates = centroidCoordinatesRepository.getById(centroidCoordinatesId);
        if(centroidCoordinates != null) {
            centroidCoordinatesRepository.updateLat(lat,centroidCoordinatesId);
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        else return  new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }

}



