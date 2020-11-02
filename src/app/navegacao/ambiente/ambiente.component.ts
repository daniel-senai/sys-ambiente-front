import { Ambiente, Regional } from './../interfaces/ambiente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.component.html',
  styleUrls: ['./ambiente.component.css']
})
export class AmbienteComponent implements OnInit {
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

