/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pl.edu.amu.carDealer.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author Ozga
 */
public class CarSimpleDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String vin;
    private String brand;
    private String model;
    private double price;
    private int productionYear;
    private String engineType;

    public CarSimpleDTO() {
    }

    public CarSimpleDTO(String vin, String brand, String model, double price, int productionYear, String engineType) {
        this.vin = vin;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.productionYear = productionYear;
        this.engineType = engineType;
    }
    

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getProductionYear() {
        return productionYear;
    }

    public void setProductionYear(int productionYear) {
        this.productionYear = productionYear;
    }

    public String getEngineType() {
        return engineType;
    }

    public void setEngineType(String engineType) {
        this.engineType = engineType;
    }

}
