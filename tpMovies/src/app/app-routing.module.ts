import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MovieDetailsComponent } from './components/movie/movie-details/movie-details.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent},
  { path: 'movies', component: MovieComponent},
  { path: 'movies/:id', component: MovieDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
