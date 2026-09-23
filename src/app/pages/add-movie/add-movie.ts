import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Movie, MovieItem } from '../../services/movie';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})
export class AddMovie {
  title = '';
  director = '';
  description = '';

  constructor(
    private movieService: Movie,
    private router: Router
  ) {}

  addMovie(): void {
    const newMovie: MovieItem = {
      id: Date.now(),
      title: this.title,
      director: this.director,
      description: this.description
    };

    this.movieService.addMovie(newMovie);

    this.router.navigate(['/movies']);
  }
}