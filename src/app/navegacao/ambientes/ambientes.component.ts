import { HttpClient } from '@angular/common/http';
import { browser } from 'protractor';
import { ErrorMsgComponent } from './../../share/error-msg/error-msg.component';
import { AmbienteService } from './../service/ambiente.service';
import { Ambiente } from './../interfaces/ambiente';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ambientes',
  templateUrl: './ambientes.component.html',
  styleUrls: ['./ambientes.component.css']
})
export class AmbientesComponent implements OnInit {
  public titleAmbiente: string = "Gestão dos Ambientes";
  public ambientes: Ambiente[];
  ambienteSetado: Ambiente;
  
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  constructor(private ambienteService: AmbienteService) { }

  ngOnInit(): void {
    this.ambienteService.getListaAmbientes().subscribe((amb: Ambiente[])=>{this.ambientes = amb})
  }
   deleteAmbiente(id: number) {
    this.ambienteService.deleteAmbiente(id)
      .subscribe(() => {
        this.ambienteService.getListaAmbientes();
      }, () => { this.errorMsgComponent.setError('Falha ao Deletar Ambiente'); });
  }
  existAmbientes(): boolean {
    return this.ambientes && this.ambientes.length > 0;
  }

}
