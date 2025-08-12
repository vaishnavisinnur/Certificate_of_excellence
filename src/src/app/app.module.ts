import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

 

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { HeaderComponent } from './header/header.component';

import { SidenavComponent } from './sidenav/sidenav.component';

import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import { CulturalComponent } from './cultural/cultural.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list';

import { MatMenuModule } from '@angular/material/menu';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatCardModule} from '@angular/material/card';

import { CertifComponent } from './certif/certif.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';

import { AcademicComponent } from './academic/academic.component';

import { SportsComponent } from './sports/sports.component';

import { AppreciationComponent } from './appreciation/appreciation.component'
import { ParticipationComponent } from './participation/participation.component';

import { ErrorComponent } from './error/error.component';

import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';

import { ReactiveFormsModule } from '@angular/forms';

import { ContainerComponent } from './container/container.component';

// import { CertificateGuardService } from './guard.service';


import { MatFormFieldModule } from '@angular/material/form-field';

// import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({

  declarations: [

    AppComponent,

    DashboardComponent,

    HeaderComponent,

    SidenavComponent,

    HomeComponent,

    CulturalComponent,

    CertifComponent,

    AcademicComponent,

    SportsComponent,

    AppreciationComponent,

    ParticipationComponent,

    ErrorComponent,
    @NgModule({

      declarations: [
    
        AppComponent,
    
        DashboardComponent,
    
        HeaderComponent,
    
        SidenavComponent,
    
        HomeComponent,
    
        CulturalComponent,
    
        CertifComponent,
    
        AcademicComponent,
    
        SportsComponent,
    
        AppreciationComponent,
    
        ParticipationComponent,
    
        ErrorComponent,
        MatSidenavModule,

        MatListModule,
    
        MatMenuModule,
    
        MatToolbarModule,
    
        MatCardModule,
    
        FlexLayoutModule,
    
        MatButtonModule,
    
        ReactiveFormsModule,
    
        MatFormFieldModule
    
      ],
    
      providers: [AuthService,AuthGuard],
    
      bootstrap: [AppComponent]
    
    })
    
    export class AppModule { }    