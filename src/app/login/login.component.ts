import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userService: UserService;

  currentUser: User = {} as User;
  wrongLogin = false;


  constructor(userService: UserService, private router: Router) {
    this.userService = userService;
  }

  onLogin(form: NgForm) {
    for (let user of this.userService.users) {
      if (
        user.name === form.value.username &&
        user.password === form.value.password
      )
      {
        this.wrongLogin = false;
       this.userService.currentUser = user;
       this.userService.isLoggedIn = true;
        alert('Logged in successful!');
        this.router.navigate(["/calendar"]);
        return
      }

    }
    this.wrongLogin = true;
  }
}
