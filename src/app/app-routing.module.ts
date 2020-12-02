import { NotificacoesComponent } from './ambientes/notificacoes/notificacoes.component';
import { UsuarioComponent } from './perfil/usuario/usuario.component';
import { UsuariosComponent } from './perfil/listar_usuarios/usuarios.component';
import { AmbientesComponent } from './ambientes/listar_ambientes/ambientes.component';
import { AmbienteComponent } from './ambientes/ambiente/ambiente.component';
import { HomeComponent } from './navegacao/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ambientes', component: AmbientesComponent },
  { path: 'ambiente', component: AmbienteComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'notificacoes', component: NotificacoesComponent }
];


@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ]
})
export class AppRoutingModule { }
