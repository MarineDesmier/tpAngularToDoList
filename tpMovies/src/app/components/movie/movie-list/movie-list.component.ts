import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input()
  public allMovies: Movie[] = []; 

  @Output('selectMovie')
  emitter = new EventEmitter<Movie>(); 

  // onSelectedMovie(movieId: number){
  //   const selected = this.allMovies.find((m: Movie) => m.id === movieId);
  //   this.emitter.emit(selected);
  // }
}
