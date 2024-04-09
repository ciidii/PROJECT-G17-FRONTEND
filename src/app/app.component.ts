import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {SpinnerService} from "./services/spinner.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PROJET-G17-FRONTEND';
  constructor(private authService:AuthService,public spinnerService:SpinnerService) {
  }

  ngOnInit(): void {
    this.authService.loadJwtTokenFromLocalStorage();
  }
}
