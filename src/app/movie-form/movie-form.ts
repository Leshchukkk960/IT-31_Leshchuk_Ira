import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  imports: [FormsModule],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css'
})
export class MovieForm {
  movies: any[] = [];

  movie = {
    title: '',
    director: '',
    description: ''
  };

  addMovie(form: any) {
    if (form.invalid) {
      return;
    }

    this.movies.push({ ...this.movie });

    form.resetForm();

    this.movie = {
      title: '',
      director: '',
      description: ''
    };
  }
}