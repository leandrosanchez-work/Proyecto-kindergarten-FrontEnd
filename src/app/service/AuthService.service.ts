import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = 'http://urldelback/api/register'//modificar con la api del back

  constructor( private http: HttpClient) { }

  //metodo para registro de usuario
  /**
 * Método para registrar un nuevo usuario.
 * Este método enviará una petición POST con los datos del formulario en formato JSON.
 *
 * Datos enviados:
 * {
 *   "nombre": "Lean Sanchez"
 *   "email": "user@example.com",
 *   "password": "password123",
 * }
 *
 * El backend debe retornar un 201 si el registro es exitoso o un mensaje de error si falla.
 */
  register( userDate: any): Observable<any>{
    return this.http.post(this.apiUrl, userDate)
  }
}
