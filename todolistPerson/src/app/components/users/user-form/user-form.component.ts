import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  constructor(private _userService: UserService){}

  onSubmit(form: NgForm) {
    if(form.valid){
      const user = new User();
      user.nom = form.value.nom;
      user.prenom = form.value.prenom;
      user.email = form.value.email;
      user.password = form.value.password;
      this._userService.create(user);
      form.reset();
    }
  }
}
