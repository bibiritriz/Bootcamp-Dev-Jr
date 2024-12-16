import { Component } from '@angular/core';
import { Book } from '../../Book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  book: Book = {
    id: 1,
    title: "Angular",
    author: "Beatriz Camargo",
    price: 50.00
  };
}
