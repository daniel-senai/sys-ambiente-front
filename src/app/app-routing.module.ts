import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatorComponent } from './authentication/authenticator/authenticator.component';
import { CreateLoginComponent } from './authentication/create-login/create-login.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './authentication/shared/auth.guard';
import { AmbienteComponent } from './navegation/ambiente/ambiente.component';
import { AmbientesComponent } from './navegation/ambientes/ambientes.component';
import { HomeComponent } from './navegation/home/home.component';
import { CreateUserComponent } from './perfil/create-user/create-user.component';
import { UserComponent } from './perfil/user/user.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'ambientes', component: AmbientesComponent },
      { path: 'ambiente', component: AmbienteComponent },
      { path: 'users', component: UserComponent },
      { path: 'create-user', component: CreateUserComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticatorComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-login', component: CreateLoginComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }