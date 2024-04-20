import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthState} from "../models/AuthState";
import {UserService} from "../services/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userForm!: FormGroup;
  isFormDirty: boolean = false;

  constructor(private userService: UserService, private fb: FormBuilder, private authState: AuthState,private toasterService:ToastrService) {
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nom: [this.authState.user.nom, Validators.required],
      prenom: [this.authState.user.prenom, Validators.required],
      email: [this.authState.user.email, Validators.required],
      adresse: [this.authState.user.adresse, Validators.required],
      numeroTel: [this.authState.user.numeroTel, Validators.required],
      roles: [this.authState.user.roles, Validators.required],
    });

    // Écoutez les changements dans le formulaire pour marquer le formulaire comme "dirty"
    this.userForm.valueChanges.subscribe(() => {
      this.isFormDirty = true;
    });
  }

  SubmitForm() {
    this.userService.modifierUtilisateur(this.authState.user.idUtilisateur,this.userForm.value).subscribe({
      next:value => {
        this.toasterService.success("Modification réussi","Succés")
      },
      error:err => {
        this.toasterService.error("La modification a echoué","Succés")
      }
    })
  }
}
