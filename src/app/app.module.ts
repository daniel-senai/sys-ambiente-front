import { HttpClientModule } from '@angular/common/http';
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
import {MultiSelectModule} from 'primeng/multiselect';
import { NotificacoesComponent } from './navegacao/notificacoes/notificacoes.component';
import { AcessosComponent } from './navegacao/acessos/acessos.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {SelectButtonModule} from 'primeng/selectbutton';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {MenuItem} from 'primeng/api';
const config: SocketIoConfig = { url: 'http://localhost:1880/ambientes', options: {} };



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
    NotificacoesComponent,
    AcessosComponent,
    
    
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
    AppRoutingModule,
    MultiSelectModule,  
    HttpClientModule,
    SocketIoModule.forRoot(config),
    PanelModule,
    DropdownModule,
    InputMaskModule,
    SelectButtonModule,
    TieredMenuModule,
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
