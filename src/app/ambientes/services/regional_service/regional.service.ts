import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Regional } from '../../interfaces/interface_regional/regional';


@Injectable({
    providedIn: 'root'
})
export class RegionalService {

    constructor(public httpCliente: HttpClient) { }

    getListaRegional(): Observable<Regional[]> {
        const url = `${environment.urlApi}/regional`;
        return this.httpCliente.get<Regional[]>(url);
      }
      getRegional(id: number): Observable<Regional> {
        const url = `${environment.urlApi}/regional/${id}`;
        return this.httpCliente.get<Regional>(url);
      }
      addRegional(regional: Regional): Observable<Regional> {
        const url = `${environment.urlApi}/regional/`;
        return this.httpCliente.post<Regional>(url, regional);
      }
      updatRegional(regional: Regional): Observable<Regional> {
        const url = `${environment.urlApi}/regional/`;
        return this.httpCliente.put<Regional>(url, regional);
      }
      deleteRegional(id: number): Observable<Regional> {
        const url = `${environment.urlApi}/regional/${id}`;
        return this.httpCliente.delete<Regional>(url);
      }
}
