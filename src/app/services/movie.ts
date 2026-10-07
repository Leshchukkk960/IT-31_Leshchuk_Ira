import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  director: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      description: 'Науково-фантастичний фільм про космос, час і подорожі між галактиками.'
    },
    {
      id: 2,
      title: 'Inception',
      director: 'Christopher Nolan',
      description: 'Фантастичний трилер про сни та проникнення у підсвідомість людини.'
    },
    {
      id: 3,
      title: 'The Matrix',
      director: 'Lana Wachowski',
      description: 'Науково-фантастичний фільм про віртуальну реальність.'
    }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  addMovie(movie: Omit<Movie, 'id'>): void {
    const newId = this.movies.length > 0
      ? Math.max(...this.movies.map(m => m.id)) + 1
      : 1;

    this.movies.push({
      id: newId,
      ...movie
    });
  }
}