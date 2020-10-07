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
  public ambientes: Ambiente[];

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  constructor(private ambienteService: AmbienteService) { }

  ngOnInit(): void {
    this.getListaAmbientes();
  }
  getListaAmbientes() {
    this.ambienteService.getListaAmbientes()
      .subscribe((ambientes: Ambiente[]) => {
        this.ambientes = ambientes;
      }, () => { console.log("Erro fatal"); });
  }
  deleteAmbiente(id: number) {
    this.ambienteService.deleteAmbiente(id)
      .subscribe(() => {
        this.getListaAmbientes();
      }, () => { this.errorMsgComponent.setError('Falha ao Deletar Ambiente'); });
  }
  existAmbientes(): boolean {
    return this.ambientes && this.ambientes.length > 0;
  }
}
