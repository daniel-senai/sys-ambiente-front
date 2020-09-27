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

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
