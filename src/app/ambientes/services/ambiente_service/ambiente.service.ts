import { Ambiente } from '../../interfaces/interface_ambiente/ambiente';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {

  constructor(private httpCliente: HttpClient) { }

  getListaAmbientes(): Observable<Ambiente[]> {
    const url = `${environment.urlApi}/ambiente`;
    return this.httpCliente.get<Ambiente[]>(url);
  }
  getAmbiente(id: number): Observable<Ambiente> {
    const url = `${environment.urlApi}/ambiente/${id}`;
    return this.httpCliente.get<Ambiente>(url);
  }
  addAmbient(ambiente: Ambiente): Observable<Ambiente> {
    const url = `${environment.urlApi}/ambiente/`;
    return this.httpCliente.post<Ambiente>(url, ambiente);
  }
  updateAmbiente(ambiente: Ambiente): Observable<Ambiente> {
    const url = `${environment.urlApi}/ambiente/`;
    return this.httpCliente.put<Ambiente>(url, ambiente);
  }
  deleteAmbiente(id: number): Observable<Ambiente> {
    const url = `${environment.urlApi}/ambiente/${id}`;
    return this.httpCliente.delete<Ambiente>(url);
  }
}
