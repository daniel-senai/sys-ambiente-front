import { Notificacao } from './../interfaces/notificacoes';
import { NotificacoesService } from './../service/notificacoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.css']
})
export class NotificacoesComponent implements OnInit {
  notificacoes: Notificacao[] = [];
  novaNotificacao: Notificacao;

  constructor(private notificacao: NotificacoesService) { }

  ngOnInit(): void {
    this.notificacao
      .getNotificacao()
      .subscribe((notif: Notificacao) => {
        this.notificacoes.push(notif);
      });
  }
  enviarNotificacao() {
    this.notificacao.sendNotificacao(this.novaNotificacao);
  }
}
