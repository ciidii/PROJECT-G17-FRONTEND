import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {HomeComponent} from "./home/home.component";
import {AddArticleComponent} from "./add-article/add-article.component";
import {AddUsersComponent} from "./add-users/add-users.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {authenticationGuard} from "./guards/authentication.guard";
import {authorizationGuard} from "./guards/authorization.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";
import {AdminAreasComponent} from "./admin-areas/admin-areas.component";
import {UserAreasComponent} from "./user-areas/user-areas.component";
import {FinancialAreasComponent} from "./financial-areas/financial-areas.component";
import {ArticlesComponent} from "./articles/articles.component";
import {VenteComponent} from "./vente/vente.component";
import {EtatCaisseComponent} from "./cash-condition/etat-caisse.component";
import {PromotionComponent} from "./promotion/promotion.component";
import {FinancialInformationComponent} from "./financial-information/financial-information.component";
import {AlerteComponent} from "./alerte/alerte.component";
import {FirstLoginComponent} from "./first-login/first-login.component";
import {BlockUserComponent} from "./block-user/block-user.component";
import {UserDetailsComponent} from "./user-details/user-details.component";

const routes: Routes = [
  {path: "login", component: LoginPageComponent},
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "notAuthorized", component: NotAuthorizedComponent, canActivate: [authenticationGuard]},
  {path: "first-connexion", component: FirstLoginComponent, canActivate: [authenticationGuard]},
    {path: "block-page", component: BlockUserComponent, canActivate: [authenticationGuard]},
  {
    path: "G17GB", component: HomeComponent, children: [
      {path: "profile", component: UserDetailsComponent, canActivate: [authenticationGuard]},
      {
        path: "admin", component: AdminAreasComponent, children: [
          {path: "add-article", component: AddArticleComponent},
          {path: "list-article", component: ArticlesComponent},
          {path: "add-user", component: AddUsersComponent},
          {path: "users-list", component: UsersListComponent},
          {path: "alert", component: AlerteComponent},
          {path: "", component: UsersListComponent}
        ], canActivate: [authenticationGuard, authorizationGuard], data: {role: "ROLE_ADMIN"}
      },
      {
        path: "user", component: UserAreasComponent, children: [
          {path: "article", component: ArticlesComponent},
          {path: "", component: ArticlesComponent},
          {path: "ventes", component: VenteComponent},
          {path: "cash-condition", component: EtatCaisseComponent}
        ]
      },
      {
        path: "financial", component: FinancialAreasComponent, children: [
          {path: "promotion", component: PromotionComponent},
          {path: "financial-information", component: FinancialInformationComponent},
          {path: "", component: FinancialInformationComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
