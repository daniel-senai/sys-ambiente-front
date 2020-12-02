import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Unidade } from '../../interfaces/interface_unidade/unidade';


@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  constructor(public httpClient: HttpClient) { }

  getAllUnidade(): Observable<Unidade[]> {
    const url = `${environment.urlApi}/unidade`;
    return this.httpClient.get<Unidade[]>(url);
  }

  getUnidade(id: number): Observable<Unidade> {
    const url = `${environment.urlApi}/unidade/${id}`;
    return this.httpClient.get<Unidade>(url);
  }

  addUnidade(unidade: Unidade): Observable<Unidade> {
    const url = `${environment.urlApi}/unidade/`;
    return this.httpClient.post<Unidade>(url, unidade);
  }

  updateUnidade(unidade: Unidade): Observable<Unidade> {
    const url = `${environment.urlApi}/unidade/`;
    return this.httpClient.put<Unidade>(url, unidade);
  }
  
  deleteUnidade(id: number): Observable<Unidade> {
    const url = `${environment.urlApi}/unidade/${id}`;
    return this.httpClient.delete<Unidade>(url);
  }
}
