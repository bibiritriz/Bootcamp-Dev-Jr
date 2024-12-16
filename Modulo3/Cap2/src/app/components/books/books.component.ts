import { Component } from '@angular/core';
import { Book } from '../../Book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: Book[] = [
    {
      id: 1,
      title: "Java 24 horas",
      author: "Beatriz Camargo",
      price: 40
    },
    {
      id: 2,
      title: "Angular 24 horas",
      author: "Fernanda Torres",
      price: 36.50
    },
    {
      id: 3,
      title: "AWS 24 horas",
      author: "Juliana Silva",
      price: 43.25
    },
    {
      id: 4,
      title: "JavaScript 24 horas",
      author: "Antenor Lucas",
      price: 28.5
    }
  ];
}
