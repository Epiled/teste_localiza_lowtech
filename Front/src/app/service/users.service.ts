import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { map, Observable } from 'rxjs';

@Injectable()
export class UsersService {
  private readonly API = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.API}/${id}`);
  }

  public getCheckUser(email: string, senha: string): Observable<User> {
    return this.http.get<User[]>(`${this.API}/?email=${email}&senha=${senha}`).pipe(
      map((users: User[]) => {
        if (users.length > 0) {
          return users[0]; // Retorna o primeiro usuário encontrado
        } else {
          throw new Error('Usuário não encontrado ou senha incorreta');
        }
      })
    );
  }

  public postUser(user: User): Observable<User> {
    return this.http.post<User>(this.API, user);
  }

  public putUser(user: User): Observable<User> {
    const url = `${this.API}/${user.id}`
    return this.http.put<User>(url, user);
  }

  public deleteUser(id: number): Observable<User> {
    const url = `${this.API}/${id}`
    return this.http.delete<User>(url);
  }
}
