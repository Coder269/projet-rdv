import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  userService: UserService;

constructor(userService: UserService) {

  this.userService = userService;

}

logOut() {
  this.userService.isLoggedIn = false;
  alert('You are logged out!')
}

}
