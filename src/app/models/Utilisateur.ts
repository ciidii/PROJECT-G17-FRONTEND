export class Utilisateur {
  private _idUtilisateur!: number;
  private _nom!: any;
  private _prenom!: any;
  private _numeroTel!: any;
  private _email!: any;
  private _identifiant!: any;
  private _motDePasse!: any ;
  private _adresse!: any;
  private _roles!: any[];
  private _activated!: boolean;
  private _premierConnexion!: boolean;
  private _estBloquer!: boolean


  constructor() {
  }

  get idUtilisateur(): number {
    return this._idUtilisateur;
  }

  set idUtilisateur(value: number) {
    this._idUtilisateur = value;
  }

  get nom(): any {
    return this._nom;
  }

  set nom(value: any) {
    this._nom = value;
  }

  get prenom(): any {
    return this._prenom;
  }

  set prenom(value: any) {
    this._prenom = value;
  }

  get numeroTel(): any {
    return this._numeroTel;
  }

  set numeroTel(value: any) {
    this._numeroTel = value;
  }

  get email(): any {
    return this._email;
  }

  set email(value: any) {
    this._email = value;
  }

  get identifiant(): any {
    return this._identifiant;
  }

  set identifiant(value: any) {
    this._identifiant = value;
  }

  get motDePasse(): any {
    return this._motDePasse;
  }

  set motDePasse(value: any) {
    this._motDePasse = value;
  }

  get adresse(): any {
    return this._adresse;
  }

  set adresse(value: any) {
    this._adresse = value;
  }

  get roles(): any[] {
    return this._roles;
  }

  set roles(value: any[]) {
    this._roles = value;
  }

  get activated(): boolean {
    return this._activated;
  }

  set activated(value: boolean) {
    this._activated = value;
  }

  get premierConnexion(): boolean {
    return this._premierConnexion;
  }

  set premierConnexion(value: boolean) {
    this._premierConnexion = value;
  }

  get estBloquer(): boolean {
    return this._estBloquer;
  }

  set estBloquer(value: boolean) {
    this._estBloquer = value;
  }
}
