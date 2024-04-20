import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../models/Utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getUsers() {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    };
    return this.http.get<Array<Utilisateur>>("http://localhost:8080/backend/utilisateurs/tous", options);
  }

  public getUserByIdentifier(identifier: string):Observable<Utilisateur> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
      params: new HttpParams().set("identifier", identifier)
    };
    return this.http.get<Utilisateur>("http://localhost:8080/backend/utilisateurs/get-utilisateur-by-identifier", options);
  }
  public updateUser(user: Utilisateur):Observable<Utilisateur> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
    let data = {id:user.idUtilisateur,password:user.motDePasse}
    return this.http.put<Utilisateur>("http://localhost:8080/backend/utilisateurs/modifierMotDePasse", JSON.stringify(data),options);
  }
  public addUser(user: any):Observable<Utilisateur> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
    return this.http.post<Utilisateur>("http://localhost:8080/backend/utilisateurs/ajouter", JSON.stringify(user),options);
  }

  bloquerUtilisateur(data: { idAdmin: number; dateDeLeveeAutomatique: null; idUtilisateur: number }) {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
    return this.http.put("http://localhost:8080/backend/utilisateurs/bloquer", JSON.stringify(data),options);
  }
  modifierUtilisateur(id:number,data:any) {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
    return this.http.put("http://localhost:8080/backend/utilisateurs/"+id, JSON.stringify(data),options);
  }
}
