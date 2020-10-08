import { environment } from './../../../environments/environment';
import { Usuario } from './../interfaces/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpCliente: HttpClient) { }
  getListaUsuarios(): Observable<Usuario[]> {
    const url = `${environment.urlApi}/usuarios`;
    return this.httpCliente.get<Usuario[]>(url);
  }
  getUsuario(id: number): Observable<Usuario> {
    const url = `${environment.urlApi}/usuarios/${id}`;
    return this.httpCliente.get<Usuario>(url);
  }
  addUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${environment.urlApi}/usuarios/`;
    return this.httpCliente.post<Usuario>(url, usuario);
  }
  updateUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${environment.urlApi}/usuarios/`;
    return this.httpCliente.put<Usuario>(url, usuario);
  }
  deleteUsuario(id: number): Observable<Usuario> {
    const url = `${environment.urlApi}/usuarios/${id}`;
    return this.httpCliente.delete<Usuario>(url);
  }
}
