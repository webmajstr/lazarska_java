package pl.edu.amu.carDealer.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.edu.amu.carDealer.model.CarDTO;

@Repository
public interface CarRepository extends CrudRepository<CarDTO, String> {
}
