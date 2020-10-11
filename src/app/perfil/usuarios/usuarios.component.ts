import { UsuarioService } from './../service/usuario.service';
import { ErrorMsgComponent } from './../../share/error-msg/error-msg.component';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../interfaces/usuario';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usuarios: Usuario[];
  usuarioSelecionado: Usuario;

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getListaUsuarios().subscribe((user: Usuario[]) => { this.usuarios = user })
  }
  deletarUsuario(id: number) {
    this.usuarioService.deleteUsuario(id)
      .subscribe(() => {
        this.usuarioService.getListaUsuarios();
      }, () => { this.errorMsgComponent.setError('Falha ao Deletar Usuario'); });
  }

}
