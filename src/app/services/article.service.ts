import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private url = "http://localhost:8080/backend";

  constructor(private http: HttpClient) {
  }

  addArticles(data: FormData, idUtilisateur: number) {
    const params = new HttpParams()
    return this.http.post(this.url + `/articles/create/${idUtilisateur}`, data, {});
  }
  getAllArticles(){
    return this.http.get(this.url + `/articles`);
  }
}
