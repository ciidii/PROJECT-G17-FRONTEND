import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {AuthState} from "../models/AuthState";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private authService:AuthService, private router:Router, protected authState:AuthState) {
  }

  handleLogout() {
    this.authService.logout()
    this.router.navigateByUrl("/login")
  }
}
