import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cobranca } from '../models/Cobranca';
import { Observable } from 'rxjs';

@Injectable()
export class CobrancasService {
  private readonly API = 'http://localhost:3000/cobrancas';
  constructor(private http: HttpClient) {}

  public getCobrancas(): Observable<Cobranca[]> {
    return this.http.get<Cobranca[]>(this.API);
  }

  public getCobrancasByClient(id: string): Observable<Cobranca[]> {
    return this.http.get<Cobranca[]>(`${this.API}/?idCliente=${id}`);
  }

  public postCobranca(cobranca: Cobranca): Observable<Cobranca> {
    return this.http.post<Cobranca>(this.API, cobranca);
  }

  public putCobranca(cobranca: Cobranca): Observable<Cobranca> {
    const url = `${this.API}/${cobranca.id}`
    return this.http.put<Cobranca>(url, cobranca);
  }

  public deleteCobranca(id: string): Observable<Cobranca> {
    const url = `${this.API}/${id}`
    return this.http.delete<Cobranca>(url);
  }
}
