package pl.edu.amu.carDealer.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.edu.amu.carDealer.model.CarDTO;
import pl.edu.amu.carDealer.model.CarSimpleDTO;

@Repository
public interface CarRepository extends CrudRepository<CarDTO, String> {
    
    @Query("select new pl.edu.amu.carDealer.model.CarSimpleDTO(vin, brand, model, price, productionYear, engineType) from pl.edu.amu.carDealer.model.CarDTO")
    Iterable<CarSimpleDTO> findAllSimple();
}
