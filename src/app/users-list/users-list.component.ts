import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../services/user.service";
import {Utilisateur} from "../models/Utilisateur";
import {ToastrService} from "ngx-toastr";
import {UserDetailModalComponent} from "../user-detail-modal/user-detail-modal.component";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @ViewChild(UserDetailModalComponent, {static: false}) userModal?: UserDetailModalComponent;
  utilisateurs!: Array<Utilisateur>
  pageSize: number = 10; // Nombre d'utilisateurs par page
  currentPage: number = 1; // Page actuelle
  constructor(private userService: UserService, private toasterService: ToastrService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: data => {
        this.utilisateurs = data
      },
      error: err => {
        console.log(err)
      }
    })
  }
  get paginatedUtilisateurs() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.utilisateurs.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.utilisateurs.length / this.pageSize);
  }

  get pages() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  open(user:Utilisateur){
    this.userModal?.openModal(user)
  }
  modifierUtilisateur(idUtilisateur: any) {

  }

  bloquerUtilisateur(idUtilisateur: any) {
    this.toasterService.success("Login success","Success",{timeOut:1000})
  }

  supprimerUtilisateur(idUtilisateur: any) {

  }
}
