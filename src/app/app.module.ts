import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './navegation/menu/menu.component';
import { FooterComponent } from './navegation/footer/footer.component';
import { HomeComponent } from './navegation/home/home.component';
import { UserComponent } from './perfil/user/user.component';
import { UpdatepasswordComponent } from './perfil/updatepassword/updatepassword.component';
import { SobreComponent } from './instituicao/sobre/sobre.component';
import { ContatoComponent } from './instituicao/contato/contato.component';
import { AmbientesComponent } from './navegation/ambientes/ambientes.component';
import { AmbienteComponent } from './navegation/ambiente/ambiente.component';
import { CreateUserComponent } from './perfil/create-user/create-user.component';
import { LoginComponent } from './authentication/login/login.component';
import { CreateLoginComponent } from './authentication/create-login/create-login.component';
import { AuthenticatorComponent } from './authentication/authenticator/authenticator.component';
import { AuthGuard } from './authentication/shared/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    UpdatepasswordComponent,
    SobreComponent,
    ContatoComponent,
    AmbientesComponent,
    AmbienteComponent,
    CreateUserComponent,
    LoginComponent,
    CreateLoginComponent,
    AuthenticatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
