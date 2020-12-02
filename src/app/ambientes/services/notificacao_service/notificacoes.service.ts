import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class NotificacoesService {

  constructor(private socket: Socket) { }
  
  sendNotificacao(notificacao) {
    this.socket.emit('nova-notificacao', notificacao);
  }
  getNotificacao = () => {
    return Observable.create((observer) => {
      this.socket.on('nova-notificacao', (notificacao) => {
        observer.next(notificacao);
      });
    });
  }
}
