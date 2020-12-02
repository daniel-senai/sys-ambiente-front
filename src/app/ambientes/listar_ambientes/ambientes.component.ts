import { HttpClient } from '@angular/common/http';
import { browser } from 'protractor';
import { ErrorMsgComponent } from '../../share/error-msg/error-msg.component';
import { AmbienteService } from '../services/ambiente_service/ambiente.service';
import { Ambiente } from '../interfaces/interface_ambiente/ambiente';
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
  constructor(
    public ambienteService: AmbienteService
  ) { }

  ngOnInit(): void {
    this.getAllAmbientes();
  }

  getAllAmbientes() {
    this.ambienteService.getListaAmbientes().subscribe(data => {
      this.ambientes = data;
      console.log(this.ambientes)
    });
  }

  deleteAmbiente(id: number) {
    this.ambienteService.deleteAmbiente(id)
      .subscribe(() => {
        this.ambienteService.getListaAmbientes();
      }, () => { this.errorMsgComponent.setError('Falha ao Deletar Ambiente'); });
  }
}
