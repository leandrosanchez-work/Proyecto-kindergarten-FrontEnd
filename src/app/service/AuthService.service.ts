import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = 'http://urldelback/api';  // Ajusta la URL según tu API

  constructor(private http: HttpClient) {}

  // Método para registrar un nuevo usuario
  register(userData: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Método para iniciar sesión
  login(userData: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  // Guardar el token JWT en el localStorage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Obtener el token JWT del localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null;
  }

  // Cerrar sesión eliminando el token del localStorage
  logout(): void {
    localStorage.removeItem('token');
  }
}
