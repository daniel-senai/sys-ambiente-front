import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { UsuarioComponent } from './perfil/usuario/usuario.component';
import { SidebarModule } from 'primeng/sidebar';

import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import { AmbienteComponent } from './navegacao/ambiente/ambiente.component';
import { AmbientesComponent } from './navegacao/ambientes/ambientes.component';
import {CardModule} from 'primeng/card';
import {GMapModule} from 'primeng/gmap';
import { UsuariosComponent } from './perfil/usuarios/usuarios.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorMsgComponent } from './share/error-msg/error-msg.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    UsuarioComponent,
    AmbienteComponent,
    AmbientesComponent,
    UsuariosComponent,
    ErrorMsgComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    TableModule,
    CardModule,
    GMapModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
