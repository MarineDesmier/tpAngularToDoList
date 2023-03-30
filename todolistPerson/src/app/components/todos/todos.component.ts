import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  selected!: Todo;
  constructor(private _todoService: TodoService){}

  todos$ = this._todoService.todos$;


  selectTodo(selected: Todo){
    this.selected = selected;
  }

  deleteTodo(){

  }

  toggleStateTodo(){

  }
}
