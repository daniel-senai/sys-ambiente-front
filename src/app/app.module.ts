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

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

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
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
