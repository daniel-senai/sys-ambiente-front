import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bloco } from '../../interfaces/interface_bloco/bloco';


@Injectable({
  providedIn: 'root'
})
export class BlocoService {

  constructor(public httpClient: HttpClient) { }

  getAllBlocos(): Observable<Bloco[]> {
    return this.httpClient.get<Bloco[]>(`${environment.urlApi}/bloco`)
  }
  getBloco(id: number): Observable<Bloco> {
    const url = `${environment.urlApi}/bloco/${id}`;
    return this.httpClient.get<Bloco>(url);
  }
  addBloco(bloco: Bloco): Observable<Bloco> {
    const url = `${environment.urlApi}/bloco/`;
    return this.httpClient.post<Bloco>(url, bloco);
  }
  updateBloco(bloco: Bloco): Observable<Bloco> {
    const url = `${environment.urlApi}/bloco/`;
    return this.httpClient.put<Bloco>(url, bloco);
  }
  deleteBloco(id: number): Observable<Bloco> {
    const url = `${environment.urlApi}/bloco/${id}`;
    return this.httpClient.delete<Bloco>(url);
  }
}
