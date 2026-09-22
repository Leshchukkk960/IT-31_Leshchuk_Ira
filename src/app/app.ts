import { Component } from '@angular/core';
import { MovieForm } from './movie-form/movie-form';

@Component({
  selector: 'app-root',
  imports: [MovieForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}