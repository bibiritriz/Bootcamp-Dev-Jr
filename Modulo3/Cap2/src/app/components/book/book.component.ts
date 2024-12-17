import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../Book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input()
  book: Book = {} as Book;

  @Output()
  saveEmitter = new EventEmitter();
  save() {
    this.saveEmitter.emit();
  }
}
