import { Component } from '@angular/core';
import { Book } from '../../Book';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  book: Book = {} as Book;
  isUpdate: boolean = false;
  idCount : number = 5;

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

  saveBook() {
    if (!this.isUpdate) {
      this.book.id = this.idCount;
      this.idCount++;
      this.books.push(this.book);
    }
    this.book = {} as Book;
    this.isUpdate = false;
  }

  remove(removeBook: Book) {
    this.books = this.books.filter(b => b !== removeBook)
  }

  update(selectedBook: Book) {
    this.book = selectedBook;
    this.isUpdate = true;
  }
}
