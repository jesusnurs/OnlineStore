import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import { VacancyTopFiveteenComponent } from './vacancy-top-fiveteen/vacancy-top-fiveteen.component';
import { VacancyTopTenComponent } from './vacancy-top-ten/vacancy-top-ten.component';
import { AuthInterceptor } from './AuthInterceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AuthComponent,
    CompaniesComponent,
    CompanyDetailsComponent,
    CompanyVacanciesComponent,
    HomeComponent,
    LoginComponent,
    VacanciesComponent,
    VacancyDetailsComponent,
    VacancyTopFiveteenComponent,
    VacancyTopTenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
