import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Livros S/A';
}
