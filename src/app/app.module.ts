import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AddArticleComponent} from './add-article/add-article.component';
import {AddUsersComponent} from './add-users/add-users.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {UsersListComponent} from './users-list/users-list.component';
import {HomeComponent} from './home/home.component';
import {AppHttpInterceptor} from "./interceptors/app-http.interceptor";
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';
import {AdminAreasComponent} from './admin-areas/admin-areas.component';
import {UserAreasComponent} from './user-areas/user-areas.component';
import {FinancialAreasComponent} from './financial-areas/financial-areas.component';
import {PromotionComponent} from './promotion/promotion.component';
import {VenteComponent} from './vente/vente.component';
import {EtatCaisseComponent} from './cash-condition/etat-caisse.component';
import {AlerteComponent} from './alerte/alerte.component';
import {ArticlesComponent} from './articles/articles.component';
import {FinancialInformationComponent} from './financial-information/financial-information.component';
import {FirstLoginComponent} from './first-login/first-login.component';
import {BlockUserComponent} from './block-user/block-user.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoadingSprinnerComponent} from './loading-sprinner/loading-sprinner.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {SpinnerInterceptor} from "./interceptors/spinner-interceptor";
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserDetailModalComponent} from './user-detail-modal/user-detail-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AddArticleComponent,
    AddUsersComponent,
    NavBarComponent,
    UsersListComponent,
    HomeComponent,
    NotAuthorizedComponent,
    AdminAreasComponent,
    UserAreasComponent,
    FinancialAreasComponent,
    PromotionComponent,
    VenteComponent,
    EtatCaisseComponent,
    AlerteComponent,
    ArticlesComponent,
    FinancialInformationComponent,
    FirstLoginComponent,
    BlockUserComponent,
    LoadingSprinnerComponent,
    UserDetailsComponent,
    UserDetailModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 1000

    }),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
