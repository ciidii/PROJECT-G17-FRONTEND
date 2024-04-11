import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from "../models/Utilisateur";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  @Input() user!: Utilisateur; // Prend l'utilisateur en entrée

  // Déclaration de variables pour le blocage de l'utilisateur
  isBlocked: boolean = false;
  blockExpirationDate!: null;
  constructor(private authService: AuthService) {
  }

  // Méthode pour bloquer l'utilisateur
  blockUser() {
    this.isBlocked = true;
    // Implémentez ici la logique pour définir la date d'expiration du blocage
  }

  // Méthode pour débloquer l'utilisateur
  unblockUser() {
    this.isBlocked = false;
    this.blockExpirationDate = null;
  }

  // Méthode pour supprimer l'utilisateur
  deleteUser() {
    // Implémentez ici la logique pour supprimer l'utilisateur
  }

  ngOnInit(): void {
    this.user = this.authService.authenticatedUserState.user;
  }

}
