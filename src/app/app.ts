
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  movies = [
    { title: 'Interstellar', year: 2014, rating: 9 },
    { title: 'Avatar', year: 2009, rating: 8 },
    { title: 'Titanic', year: 1997, rating: 7 }
  ];

  newTitle = '';
  newYear: number | null = null;
  newRating: number | null = null;

  addMovie() {
    if (
      this.newTitle.trim() === '' ||
      this.newYear === null ||
      this.newRating === null
    ) {
      return;
    }

    this.movies.push({
      title: this.newTitle,
      year: this.newYear,
      rating: this.newRating
    });

    this.newTitle = '';
    this.newYear = null;
    this.newRating = null;
  }

  deleteMovie(index: number) {
    this.movies.splice(index, 1);
  }
}