package com.abutua.product_backend.models;

public class Category {
  //Atributos
  private int id;
  private String name;

  //Construtores
  public Category(int id, String name){
    this.id = id;
    this.name = name;
  }

  public Category(){

  }

  //Métodos
  public void setId(int id){
    this.id = id;
  }

  public void setName(String name){
    this.name = name;
  }

  public int getId(){
    return id;
  }

  public String getName(){
    return name;
  }
}
