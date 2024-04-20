import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Categorie} from "../models/Categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private url = "http://localhost:8080/backend";
  constructor(private http: HttpClient) { }

  getAllArticles(){
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
    return this.http.get<Array<Categorie>>(this.url + "/categories/tous-categories");
  }

}
