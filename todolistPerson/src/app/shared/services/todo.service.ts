import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { Todo } from "../models/todo";

@Injectable({
    providedIn:'root'
})
export class TodoService {
    private _baseUrl = environment.urlApi + '/todos';

    public todos$ = new BehaviorSubject<Todo[]>([]);

    constructor(private _http: HttpClient){
        this.findAll(); // méthode pour ajouter des tâches
    }

    // GET
    findAll(){
        this._http
        .get<Todo[]>(this._baseUrl)
        .subscribe(data => {
            this.todos$.next(data);
        });
    }

    // GET par id
    findById(id?: string){
        return this._http.get<Todo>(`${this._baseUrl}/${id}`);
    }

    // POST
    public create(todo: Todo) {
        this._http
        .post<Todo>(this._baseUrl, todo)
        .subscribe(newTodo => {
            this.todos$.next([
                newTodo, ...this.todos$.value,
            ]);
        });
    }

    // PUT
    public update(todo: Todo){
        this._http
        .put<Todo>(`${this._baseUrl}/${todo.id}`, todo)
        .subscribe(() => this.findAll());
    }

    // DELETE
    public delete(id?: string){
        if(id){
            this._http
            .delete<Todo>(`${this._baseUrl}/${id}`)
            .subscribe(() => this.findAll());
        }
    }
}
