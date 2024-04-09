import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators,} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent implements OnInit {
  formGroup!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private userService: UserService,private toasterService:ToastrService,private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        identifier: this.formBuilder.control('', [Validators.required]),
        password: this.formBuilder.control('', [Validators.required])
      })

  }

  handleLogin() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    let identifier = this.formGroup.value.identifier;
    let password = this.formGroup.value.password;
    this.authService.login(identifier, password).subscribe({
      next: data => {
        this.authService.loadProfile(data);
      },
      error:err => {
        if (err.status==400){
          this.errorMessage="Vérifier vos coordonées"
        }else {
          this.errorMessage="Un problème inattendu est survenue au niveau server veillez reéssez plustart"
        }
      }
    })
  }
}
