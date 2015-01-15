/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pl.edu.amu.carDealer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.amu.carDealer.model.CarDTO;
import pl.edu.amu.carDealer.model.CarSimpleDTO;
import pl.edu.amu.carDealer.repository.CarRepository;

/**
 *
 * @author Ozga
 */
@RestController
@RequestMapping(value = "/car")
public class CarDealerResource {

    @Autowired
    private CarRepository cars;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<CarSimpleDTO> getBooksList() {

        return null;
      //  return cars.findAll();
    }

    @RequestMapping(value = "/{vin}", method = RequestMethod.GET)
    public CarDTO getCar(@PathVariable String vin) {

        return cars.findOne(vin);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void createCar(@RequestBody CarDTO car) {
        if (!cars.exists(car.getVin()))  {
            cars.save(car);
        }
    }

    @RequestMapping(value = "/{vin}", method = RequestMethod.PUT)
    public void updateCar(@PathVariable String vin, @RequestBody CarDTO car) {

        if (cars.exists(vin)) {
            cars.save(car);
        }
    }

    @RequestMapping(value = "/{vin}", method = RequestMethod.DELETE)
    public void deleteCar(@PathVariable String vin) {

        if (cars.exists(vin)) {
            cars.delete(vin);
        }
    }

}
