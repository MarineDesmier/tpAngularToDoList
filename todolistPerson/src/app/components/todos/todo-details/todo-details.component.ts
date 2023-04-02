import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent{
  
  constructor(
    private _todoService: TodoService
  ){}


  editTodo(todo: Todo) {
    todo.editable = !todo.editable;
    if (!todo.editable){
      this._todoService.update(todo);
    } 
  }

  deleteTodo(id?: string) {
    this._todoService.delete(id);
  }
}
