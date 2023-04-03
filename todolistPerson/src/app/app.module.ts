import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersComponent } from './components/users/users.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';
import { TodoDetailsComponent } from './components/todos/todo-details/todo-details.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    UserFormComponent,
    TodosComponent,
    TodoFormComponent,
    TodoDetailsComponent,
    HomeComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
