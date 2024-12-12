package com.abutua.product_backend.resources;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.abutua.product_backend.models.Product;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.net.URI;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin
public class ProductController {

  // int id, String name, String description, int idCategory, double price,
  // boolean promotion, boolean newProduct
  private List<Product> products = new ArrayList<>();
  //Arrays.asList(
  //     new Product(1, "Café Gourmet", "Café de alta qualidade, 500g", 1, 99.50, false, false),
  //     new Product(2, "Chá Orgânico", "Chá verde orgânico, 250g", 2, 200.75, true, true),
  //     new Product(3, "Chocolate Importado", "Chocolate suíço premium, 100g", 3, 299.99, false, true),
  //     new Product(4, "Vinho Premium", "Vinho tinto de reserva, 750ml", 4, 450.50, true, false));

  @PostMapping("products")
  public ResponseEntity<Product> save(@RequestBody Product product) {
    product.setId(products.size() + 1);
    products.add(product);

    URI location = ServletUriComponentsBuilder
        .fromCurrentRequest()
        .path("/{id}")
        .buildAndExpand(product.getId())
        .toUri();
        
    return ResponseEntity.created(location).body(product);
  }

  // @PostConstruct
  // public void init() {
  // Product p1 = new Product();
  // // p1.setId(1);
  // // p1.setName("Produto 01");
  // // p1.setPrice(100.50);

  // Product p2 = new Product(2, "Produto 02", 200.5);
  // Product p3 = new Product(3, "Produto 03", 300.5);

  // products.add(p1);
  // products.add(p2);
  // products.add(p3);
  // }

  // http://localhost:8080/products/1
  @GetMapping("products/{id}")
  public ResponseEntity<Product> getProduct(@PathVariable int id) {
    // if(id<= products.size()){
    // return ResponseEntity.ok(products.get(id-1));
    // }
    // else{
    // throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found");
    // }
    Product prod = products.stream()
        .filter(p -> p.getId() == id)
        .findFirst()
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
    return ResponseEntity.ok(prod);
  }

  @GetMapping("products")
  public List<Product> getProducts() {
    return products;
  }
}
