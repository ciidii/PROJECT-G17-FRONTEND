import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";

export const authenticationGuard: CanActivateFn = (route, state) => {

  if (inject(AuthService).authenticatedUserState.authenticated) {
    return true;
  }else {
    inject(Router).navigateByUrl("/login")
    return false;
  }
};
