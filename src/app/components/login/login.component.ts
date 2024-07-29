import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email! : string
  password! : string

  constructor(private auth : AuthService){}

  login(){
    this.auth.login(this.email, this.password)
  }

  testUserInfo() {
    this.auth.getUserRole()
  }
}
