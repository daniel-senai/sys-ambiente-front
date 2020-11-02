import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  statusSelecionado: any = null;
  selecionePerfilUsuario: any= null;
  constructor() { }

  ngOnInit() {
  }
  status: any[] = [
    { name: 'ATIVO', code: 'ATIVO' },
    { name: 'INATIVO', value: 'INATIVO' },
  ];
  perfilUsuarios: any[] = [
    { name: 'ALUNO', value: 'ALUNO' },
    { name: 'PROFESSOR', code: 'PROFESSOR' },
  ];

}
