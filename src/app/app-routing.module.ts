import { NgModule } from '@angular/core';//This is used to define an Angular module, which encapsulates components, services, directives, pipes, and other modules
import { RouterModule, Routes } from '@angular/router';//RouterModule: It is the Angular module that provides the routing functionality.
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
  /* This defines that when the app is loaded (at the root URL), it will automatically redirect to the /login route. 
  The pathMatch: 'full' means that the whole path must match for the redirect to happen.*/
  
  {path:'',redirectTo:'login',pathMatch:'full'},
 // Path: This defines the URL path for a route. The empty path '' here means the root of the application (i.e., localhost:4200/).
 // redirectTo: When the empty path is matched, the app will be redirected to the /login route.


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

/**
 
 * imports: RouterModule.forRoot(routes) tells Angular to use the routes you've defined. 
 The forRoot() method is used to configure the root routing for the application.

 * exports: The RouterModule is exported so that the app's components can access the routing
  functionalities. Without this, the routing won't work in the app.
 
  */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
