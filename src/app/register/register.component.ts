import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userService: UserService;
  alreadyRegistered = false;

  constructor(userService: UserService, private router: Router) {
    this.userService = userService;
  }

  onRegister(form: NgForm) {
    let newUser: User = {
      name: form.value.username,
      email: form.value.email,
      password: form.value.password,
      rdv: [],
    };
    for (let user of this.userService.users) {
      if (newUser.email === user.email) {
        this.alreadyRegistered = true;
        return;
      }
    }
    this.alreadyRegistered = false;
    this.userService.addUser(newUser);
    alert('Registration successful!');
    this.router.navigate(['/login']);
  }
}
