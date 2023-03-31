import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodoDetailsComponent } from './components/todos/todo-details/todo-details.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todoForm', component: TodoFormComponent },
  { path: 'todos/todoList', component: TodoListComponent },
  { path: 'todos/:id', component: TodoDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'userForm', component: UserFormComponent },
  // { path: 'users/:id', component: User }, ajouter details
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
