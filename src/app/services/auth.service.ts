import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";
import {Router} from "@angular/router";
import {UserService} from "./user.service";
import {AuthState} from "../models/AuthState";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8080/backend";
  roles: any;
  identifier!: any;
  accessToken!: any;
    constructor(private http: HttpClient, private router: Router, private userService: UserService, public authenticatedUserState: AuthState) {
  }

  public login(username: string, password: string) {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    };
    let body = {
      identifiant: username,
      motDePasse: password
    };

    return this.http.post(this.url + "/utilisateurs/connexion", JSON.stringify(body), options);
  }

  loadProfile(data: any) {
    this.accessToken = data["bearer"]
    let decodedJwt: any = jwtDecode(this.accessToken);
    this.identifier = decodedJwt.sub;
    this.roles = decodedJwt.roles.split(" ");
    this.userService.getUserByIdentifier(this.identifier).subscribe(
      {
        next: user => {
          this.authenticatedUserState.token = this.accessToken;
          this.authenticatedUserState.authenticated = true
          this.authenticatedUserState.user = user;
          this.redirectToTheRightPage(this.authenticatedUserState)
          window.localStorage.setItem("bearer", this.accessToken);
        }, error: err => {
          console.log(err);
        }
      }
    );
  }

  redirectToTheRightPage(authenticatedState: AuthState) {
    if (authenticatedState.authenticated && !authenticatedState.user.premierConnexion && !authenticatedState.user.estBloquer && authenticatedState.user.activated) {
      if (authenticatedState.user.roles.includes("ROLE_ADMIN")) {
        this.router.navigateByUrl("G17GB/admin")
      } else if (authenticatedState.user.roles.includes("ROLE_FINANCIER")) {
        this.router.navigateByUrl("G17GB/financial")
      } else {
        this.router.navigateByUrl("G17GB/user")
      }
    } else if (authenticatedState.authenticated && authenticatedState.user.premierConnexion) {
      this.router.navigateByUrl("first-connexion")
    } else if (authenticatedState.authenticated && authenticatedState.user.estBloquer) {
      this.router.navigateByUrl("block-page")
    } else if (authenticatedState.authenticated && !authenticatedState.user.activated) {
      this.router.navigateByUrl("block-page")
    }
  }


  logout() {
    this.authenticatedUserState.authenticated = false;
    this.identifier = undefined;
    this.roles = undefined;
  }

  loadJwtTokenFromLocalStorage() {
    let token = window.localStorage.getItem("bearer");
    if (token) {
      this.loadProfile({"bearer": token})
    }
  }
}
