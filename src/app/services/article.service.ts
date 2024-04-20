import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import * as FormData from "form-data";
import {FormDataImpl} from "../interfaces/FormDataImpl";


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private url = "http://localhost:8080/backend";

  constructor(private http: HttpClient) {
  }

  ajouterArticle(data: FormDataImpl, idUtilisateur: number) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    let requestParm: HttpParams = new HttpParams();
    requestParm.set("article-id", 1);
    requestParm.set("user-id", 3)
    return this.http.post(this.url + `/articles/add-image`, data, {
      params: new HttpParams()
        .set("article-id", 1)
        .set("user-id", 3),
        headers: new HttpHeaders().set("Content-Type", "multipart/form-data"),
    },
    );
  }
}
