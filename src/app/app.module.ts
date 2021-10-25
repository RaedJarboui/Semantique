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

const routes: Routes = [
  { path: '', component:PatientComponent},
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
    HopitalComponent

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
