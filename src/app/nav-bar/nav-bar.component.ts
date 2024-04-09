import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private authService:AuthService,private router:Router) {
  }

  handleLogout() {
    this.authService.logout()
    this.router.navigateByUrl("/login")
  }
}
