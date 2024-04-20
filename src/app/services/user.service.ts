import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../models/Utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080/backend";
  private options = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
  };

  constructor(private http: HttpClient) {
  }

  public getUsers() {

    return this.http.get<Array<Utilisateur>>(this.url + "/utilisateurs/tous", this.options);
  }

  public getUserByIdentifier(identifier: string):Observable<Utilisateur> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
      params: new HttpParams().set("identifier", identifier)
    };
    return this.http.get<Utilisateur>(this.url+"/utilisateurs/get-utilisateur-by-identifier", options);
  }
  public updateUser(user: Utilisateur):Observable<Utilisateur> {

    let data = {id:user.idUtilisateur,password:user.motDePasse}
    return this.http.put<Utilisateur>(this.url+"/utilisateurs/modifierMotDePasse", JSON.stringify(data),this.options);
  }
  public addUser(user: any):Observable<Utilisateur> {

    return this.http.post<Utilisateur>(this.url+"/utilisateurs/ajouter", JSON.stringify(user),this.options);
  }

  bloquerUtilisateur(data: { idAdmin: number; dateDeLeveeAutomatique: null; idUtilisateur: number }) {

    return this.http.put(this.url+"/utilisateurs/bloquer", JSON.stringify(data),this.options);
  }
  modifierUtilisateur(id:number,data:any) {

    return this.http.put(this.url+"/utilisateurs/"+id, JSON.stringify(data),this.options);
  }
}
