import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from 'src/environments/environment';
import { Movie } from "../models/movie";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    // variable pour api
    private _baseUrl = environment.urlApi + '/movies';
    public movies$ = new BehaviorSubject<Movie[]>([]);

    constructor(private _http: HttpClient){
        this.findAll();
    }

    public findAll(){
        this._http
            .get<Movie[]>(this._baseUrl)
            .subscribe(movieFromApi => {
                this.movies$.next(movieFromApi);
            });
    }
}

