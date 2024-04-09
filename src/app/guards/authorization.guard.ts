import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";


export const authorizationGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).authenticatedUserState.user.roles.includes("ROLE_ADMIN")) {
    return true;
  } else {
    inject(Router).navigateByUrl("notAuthorized")
    return false
  }

};
