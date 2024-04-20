  import { Injectable } from '@angular/core';
  import {Subject} from "rxjs";
  import {Utilisateur} from "../models/Utilisateur";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  // Crée un objet Subject qui va émettre des événements lorsqu'on appelle ses méthodes next()
  private deleteMemberSubject = new Subject<Utilisateur>();

  // Crée un observable à partir du Subject pour que les composants puissent seulement s'abonner et non émettre des événements
  deleteMember$ = this.deleteMemberSubject.asObservable();

  // Méthode pour émettre un événement de suppression vers les composants abonnés
  updateMemberUi(member: Utilisateur) {
    this.deleteMemberSubject.next(member);
  }
}
