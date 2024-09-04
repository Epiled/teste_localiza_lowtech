import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable()
export class ClientesService {
  private readonly API = 'http://localhost:3000/clientes';
  constructor(private http: HttpClient) {}

  public getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API);
  }

  public getClientesByUser(id: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.API}/?idUser=${id}`);
  }

  public postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, cliente);
  }

  public putCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${this.API}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente);
  }

  public deleteCliente(id: number): Observable<Cliente> {
    const url = `${this.API}/${id}`
    return this.http.delete<Cliente>(url);
  }
}
