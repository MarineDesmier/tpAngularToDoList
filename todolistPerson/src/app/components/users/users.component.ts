import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private _userService: UserService){}
  users$ = this._userService.users$;

  deleteUser(id?: string){
    this._userService.delete(id);
  }

  editUser(user: User){
    user.editable = !user.editable;
    if(!user.editable){
      this._userService.update(user);
    }
  }
}
