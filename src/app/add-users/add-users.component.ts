import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {Utilisateur} from "../models/Utilisateur";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  userForm!: FormGroup;
  user: Utilisateur = new Utilisateur();

  constructor(public fb: FormBuilder, private userService: UserService, private router: Router,private toasterService:ToastrService) {
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      nom: ['', Validators.required,],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      adresse: ['', Validators.required],
      numeroTel: ['', Validators.required],
      role: ['', Validators.required],
    })
  }

  SubmitForm() {
    this.user.nom = this.userForm.value.nom;
    this.user.prenom = this.userForm.value.prenom;
    this.user.email = this.userForm.value.email;
    this.user.adresse = this.userForm.value.adresse;
    this.user.numeroTel = this.userForm.value.numeroTel;
    this.user.roles = this.userForm.value.role;
    let data = {
      nom: this.userForm.value.nom,
      prenom: this.userForm.value.prenom,
      numeroTel: this.userForm.value.numeroTel,
      email: this.userForm.value.email,
      adresse: this.userForm.value.adresse,
      roles: [this.userForm.value.role],

    };
    this.userService.addUser(data).subscribe({
      next: data => {
        this.toasterService.success("Utilisateur ajouter avec succés","Infos")
        this.router.navigateByUrl("/user-list");
        console.log(data);
      },
      error: err => {
        this.toasterService.error("Utilisateur ajouter avec succés")
        console.log(err);      }
    })
  }
}
