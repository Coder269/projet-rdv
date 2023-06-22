import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
<<<<<<< HEAD
 // if (!inject(UserService).isLoggedIn)
  //inject(Router).navigate(['/login']);
   //return inject(UserService).isLoggedIn
   return true;
=======
  if (!inject(UserService).isLoggedIn) inject(Router).navigate(['/login']);
  return inject(UserService).isLoggedIn;
>>>>>>> 582c3f82a129afc467cb503c4b2eafc55364ee95
};
