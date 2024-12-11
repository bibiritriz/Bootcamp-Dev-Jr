package com.abutua.product_backend.resources;

import org.springframework.web.bind.annotation.RestController;
import com.abutua.product_backend.models.Product;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;
import java.util.ArrayList;

@RestController
public class ProductController {
  @GetMapping("product")
  public Product getProduct() {
    Product p = new Product();
    p.setId(1);
    p.setName("Produto 01");
    p.setPrice(100.50);
    return p;
  }

  @GetMapping("products")
  public List<Product> getProducts() {
    Product p2 = new Product();
    p2.setId(2);
    p2.setName("Produto 02");
    p2.setPrice(200.50);

    Product p3 = new Product();
    p3.setId(2);
    p3.setName("Produto 03");
    p3.setPrice(300.50);

    Product p4 = new Product();
    p4.setId(4);
    p4.setName("Produto 04");
    p4.setPrice(400.50);

    List<Product> listProducts = new ArrayList<>();
    listProducts.add(p2);
    listProducts.add(p3);
    listProducts.add(p4);

    return listProducts;
  }
}
