import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { HopitalComponent } from './hopital/hopital.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'patient', component: PatientComponent  },
  { path: 'personnel', component:PersonnelComponent  },
  { path: 'hopital', component: HopitalComponent  },


 

  

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PatientComponent,
    PersonnelComponent,
    HopitalComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
