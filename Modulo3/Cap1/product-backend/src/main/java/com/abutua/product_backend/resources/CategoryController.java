package com.abutua.product_backend.resources;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.abutua.product_backend.models.Category;
import java.util.List;
import java.util.Arrays;

@RestController
@CrossOrigin
public class CategoryController {
  private List<Category> categories = Arrays.asList( new Category(1, "Produção Própria"),
  new Category(2, "Nacional"),
  new Category(3, "Importado"),
  new Category(4, "Premium"));

  @GetMapping("categories/{id}")
  public ResponseEntity<Category> getCategorys(@PathVariable int id) {
    Category cat = categories.stream()
                        .filter(c -> c.getId() == id)
                        .findFirst()
                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found"));
    return ResponseEntity.ok(cat);
  }

  @GetMapping("categories")
  public List<Category> getCategorys() {
      return categories;
  }
}
