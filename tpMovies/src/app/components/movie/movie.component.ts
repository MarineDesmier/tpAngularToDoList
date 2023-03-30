import { Component } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movies$ = this._movieService.movies$;
  selected!: Movie;

  constructor(
    private _movieService: MovieService,
  ){}

  onSelected(movie: Movie){
    this.selected = movie;
  }
}
