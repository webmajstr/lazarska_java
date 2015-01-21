package pl.edu.amu.carDealer.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class CarDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String vin;
    private String brand;
    private String model;
    private double price;
    private int productionYear;
    private double engineCap;
    private String engineType;
    private String color;

    public CarDTO() {
    }

    public CarDTO(long id, String vin, String brand, String model, double price, int productionYear, double engineCap, String engineType, String color) {
        this.id = id;
        this.vin = vin;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.productionYear = productionYear;
        this.engineCap = engineCap;
        this.engineType = engineType;
        this.color = color;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public double getEngineCap() {
        return engineCap;
    }

    public void setEngineCap(double engineCap) {
        this.engineCap = engineCap;
    }

    public String getEngineType() {
        return engineType;
    }

    public void setEngineType(String engineType) {
        this.engineType = engineType;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

}
