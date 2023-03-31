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

  deleteTodo(id?: string){
    this._todoService.delete(id);
  }

  toggleTodo(todo: Todo){ // change l'état de notre todo (faite ou non faite)
    todo.check = !todo.check;
    this._todoService.update(todo);
  }

  editTodo(todo: Todo) {
    todo.editable = !todo.editable;
    if (!todo.editable){
      this._todoService.update(todo);
    } 
  }
}
