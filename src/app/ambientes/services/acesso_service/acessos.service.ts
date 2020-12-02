import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Acessos } from '../../interfaces/interface_acesso/acessos';

@Injectable({
  providedIn: 'root'
})
export class AcessosService {

  constructor(public httpCliente: HttpClient) { }

  getListAcessos(): Observable<Acessos[]> {
    const url = `${environment.urlApi}/acessos`;
    return this.httpCliente.get<Acessos[]>(url);
  }
  getAcesso(id: number): Observable<Acessos> {
    const url = `${environment.urlApi}/acessos/${id}`;
    return this.httpCliente.get<Acessos>(url);
  }
  addAcesso(acesso: Acessos): Observable<Acessos> {
    const url = `${environment.urlApi}/acessos/`;
    return this.httpCliente.post<Acessos>(url, acesso);
  }
  updateAcesso(acesso: Acessos): Observable<Acessos> {
    const url = `${environment.urlApi}/acessos/`;
    return this.httpCliente.put<Acessos>(url, acesso);
  }
  deleteAcesso(id: number): Observable<Acessos> {
    const url = `${environment.urlApi}/acessos/${id}`;
    return this.httpCliente.delete<Acessos>(url);
  }
}
