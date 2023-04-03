import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private _auth: AuthService,
    private _router: Router
  ){}

  ngOnInit(): void {
  }

  onLogin() {
    this._auth.login();
    this._router.navigateByUrl('/facesnaps');
  }


}
