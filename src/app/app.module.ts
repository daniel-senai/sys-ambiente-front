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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    MenubarModule,
    InputTextModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
