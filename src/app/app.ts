import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService, Movie } from './services/movie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getMovies();
  }

  addMovie(title: string, year: number, rating: number) {
    this.movieService.addMovie(title, year, rating);
    this.movies = this.movieService.getMovies();
  }

  removeMovie(id: number) {
    this.movieService.removeMovie(id);
    this.movies = this.movieService.getMovies();
  }
}
