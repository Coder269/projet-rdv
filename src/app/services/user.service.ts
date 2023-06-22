import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  isLoggedIn: boolean = false;
  currentUser: User;

  constructor() {
    this.currentUser = {} as User;
   }

   addUser(user: User) {

    this.users.push(user);

   }


}
