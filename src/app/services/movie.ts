import { Injectable } from '@angular/core';

export interface MovieItem {
  id: number;
  title: string;
  director: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class Movie {
  private movies: MovieItem[] = [
    {
      id: 1,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      description: 'Науково-фантастичний фільм про космос, час і подорожі.'
    },
    {
      id: 2,
      title: 'Inception',
      director: 'Christopher Nolan',
      description: 'Фантастичний трилер про сни та підсвідомість людини.'
    },
    {
      id: 3,
      title: 'Avatar',
      director: 'James Cameron',
      description: 'Науково-фантастичний фільм про планету Пандора.'
    }
  ];

  getMovies(): MovieItem[] {
    return this.movies;
  }

  getMovieById(id: number): MovieItem | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  addMovie(movie: MovieItem): void {
    this.movies.push(movie);
  }
}