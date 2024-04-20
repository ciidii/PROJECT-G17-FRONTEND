import { Component } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.css']
})
export class FirstLoginComponent {

  newPassword: string = '';
  confirmPassword: string = '';
  passwordNotMachMessage:string='';
  constructor(private userService:UserService,private authService:AuthService,private toastr:ToastrService) {
  }
  changePassword() {
    if (this.confirmPassword===this.newPassword){
      this.authService.authenticatedUserState.user.motDePasse=this.confirmPassword;
      this.userService.updateUser(this.authService.authenticatedUserState.user).subscribe({
        next:user=>{
          this.authService.authenticatedUserState.user=user;
          this.toastr.success("Mot de passe changer avec succés")
          this.authService.redirectToTheRightPage(this.authService.authenticatedUserState)
        },
        error:err => {
          this.toastr.error("Le mot de passe n'est pas changer","Info")
          console.log(err);
        }
      })
    }else {
    this.passwordNotMachMessage="Les Mots de passe ne correspondent pas"
    }

    console.log('Mot de passe changé avec succès');
  }
}
