import {Component, ElementRef, Injectable, OnInit, ViewChild} from '@angular/core';
import {Utilisateur} from "../models/Utilisateur";
import {ModalService} from "../services/modal.service";
import {AuthState} from "../models/AuthState";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-detail-modal',
  templateUrl: './user-detail-modal.component.html',
  styleUrls: ['./user-detail-modal.component.css']
})
@Injectable({providedIn: "root"})
export class UserDetailModalComponent implements OnInit {
  @ViewChild("myModal", {static: false}) myModal?: ElementRef;
  user!: Utilisateur;
  blockExpirationDate!: null;

  constructor(private modalService: ModalService, private authState: AuthState, private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.authState.user;
  }

  openModal(user: Utilisateur) {
    this.user = user;
    (this.myModal?.nativeElement as HTMLElement).style.display = 'block';
  }

  closeModal(user: Utilisateur) {
    (this.myModal?.nativeElement as HTMLElement).style.display = 'none';
    this.modalService.updateMemberUi(user);
  }

  BloquerUtilisateur() {
    this.user.estBloquer = true;
  }

  annulerBloquage() {
    this.user.estBloquer = false;
  }

  ValiderBloquage(idUtilisateur: number) {
    let data = {
      idAdmin: this.authState.user.idUtilisateur,
      idUtilisateur: idUtilisateur,
      dateDeLeveeAutomatique: this.blockExpirationDate
    }
    this.userService.bloquerUtilisateur(data).subscribe(
      {
        next: data => {
          this.user.estBloquer = true;
          this.annulerBloquage();
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
