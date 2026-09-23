import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie, MovieItem } from '../../services/movie';

@Component({
  selector: 'app-movies',
  imports: [RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies implements OnInit {
  movies: MovieItem[] = [];

  constructor(private movieService: Movie) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }
}