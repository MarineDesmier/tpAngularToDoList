import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private _http: HttpClient){
        this.findAll();
    }
    private _baseUrlUser = environment.urlApi + '/users';

    public users$ =  new BehaviorSubject<User[]>([]);

    // GET
    findAll(){
        this._http
        .get<User[]>(this._baseUrlUser)
        .subscribe(data => {
            this.users$.next(data);
        });
    }

    // Put
    public update(user: User){
        this._http
        .put<User>(`${this._baseUrlUser}/${user.id}`, user)
        .subscribe(() => this.findAll());
    }

    // Delete
    public delete(id?: string){
        if(id){
            this._http
            .delete<User>(`${this._baseUrlUser}/${id}`)
            .subscribe(() => this.findAll());
        }
    }

    // Post
    public create(user: User){
        this._http
        .post<User>(this._baseUrlUser, user)
        .subscribe(newUser => {
            this.users$.next([
                newUser, ...this.users$.value,
            ]);
        });
    }
}
