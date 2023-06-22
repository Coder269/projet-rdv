import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  /*if (!inject(UserService).isLoggedIn) inject(Router).navigate(['/login']);
  return inject(UserService).isLoggedIn;*/
  return true;
};
