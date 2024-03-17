import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path:'login',
    component: LoginComponent
  }, 
  {
    path:'register',
    component: RegisterComponent
  }, 
  {
    path:'home',
    component: HomeComponent,
    canActivate: [authGuard]
  }, 
  {
    path:'**',
    redirectTo:'home', pathMatch:'full'
  }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
