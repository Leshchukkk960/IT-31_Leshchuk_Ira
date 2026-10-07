import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';

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
    private movieService: MovieService,
    private router: Router
  ) {}

  addMovie(): void {
    this.movieService.addMovie({
      title: this.title,
      director: this.director,
      description: this.description
    });

    this.router.navigate(['/movies']);
  }
}