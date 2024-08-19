import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcademicComponent } from './academic/academic.component';
import { AppreciationComponent } from './appreciation/appreciation.component';
import { CulturalComponent } from './cultural/cultural.component';
import { ParticipationComponent } from './participation/participation.component';
import { ErrorComponent } from './error/error.component';
import { SportsComponent } from './sports/sports.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidenavComponent } from './sidenav/sidenav.component';
// import { CertificateGuardService } from './guard.service';
import { AuthGuard } from './guard.service';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'',component:SidenavComponent},
  {path:'home',component:HomeComponent}, 
  {path:'academic',component:AcademicComponent},
  {path:'appreciation',component:AppreciationComponent},
  {path:'cultural',component:CulturalComponent},
  {path:'participation',component:ParticipationComponent},
  {path:'sports',component:SportsComponent},  
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
