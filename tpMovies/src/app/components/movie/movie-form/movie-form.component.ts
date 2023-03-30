import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  constructor(
    private _movieService: MovieService,
  ) {}

  onSubmit(form: NgForm){
    if(form.valid){
      const movie = new Movie();
      movie.id = form.value.id;
      movie.poster_path = form.value.poster_path;
      movie.release_date = form.value.release_date;
      movie.title = form.value.title;
      this._movieService.create(movie);
      form.reset();
    }
  }
}
