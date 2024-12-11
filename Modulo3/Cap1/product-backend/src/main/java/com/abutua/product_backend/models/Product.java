package com.abutua.product_backend.models;

public class Product {
  //Atributos
  private int id;
  private String name;
  private double price;
  //Métodos
  public int getId() {
    return id;
  }
  public void setId(int id) {
    this.id = id;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public double getPrice() {
    return price;
  }
  public void setPrice(double price) {
    this.price = price;
  }
  
}
