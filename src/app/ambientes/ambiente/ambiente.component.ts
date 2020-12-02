import { Component, OnInit } from '@angular/core';
import { BlocoService } from '../services/bloco_service/bloco.service';
import { RegionalService } from '../services/regional_service/regional.service';
import { UnidadeService } from '../services/unidade_service/unidade.service';


@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.component.html',
  styleUrls: ['./ambiente.component.css']
})
export class AmbienteComponent implements OnInit {
  statusSelecionado: any = null;
  selecionePerfilUsuario: any = null;
  ligarLanpadaFrente: boolean = false;
  ligarLanpadaFundo: boolean = false;
  ligarAr: boolean = false;
  desligarTudo: boolean = false;

  regionaisList: any[]
  unidadesList: any[]
  blocosList: any[]

  constructor(
    public regionalService: RegionalService,
    public unidadeService: UnidadeService,
    public blocoService: BlocoService
  ) { }

  ngOnInit() {
    this.regionalService.getListaRegional().subscribe(data => { this.regionaisList = data });
  }

  tipoAmbientes: any[] = [
    { name: 'LABORATORIO', value: 'LABORATORIO' },
    { name: 'SERVIDOR', code: 'SERVIDOR' },
    { name: 'COMPORTAMENTAL', value: 'COMPORTAMENTAL' },
    { name: 'ADMINISTRATIVO', code: 'ADMINISTRATIVO' },
    { name: 'CERTIFICACAO', value: 'CERTIFICACAO' },
    { name: 'AUDITORIO', code: 'AUDITORIO' },
    { name: 'ANFITEATRO', value: 'ANFITEATRO' },
  ];

  regionais: any[] = [
    { name: "Regional", value: 'ALUNO' },
  ];
  unidades: any[] = [
    { name: 'unidade', value: 'ALUNO' },
  ];
  blocos: any[] = [
    { name: 'bloco', value: 'ALUNO' },
  ];
}

