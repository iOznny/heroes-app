import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 
  private url: string = environment.permalinkURL;

  constructor(private http: HttpClient) {

  }

  // Autenticación
  login() {
    return this.http.get<Auth>(`${ this.url }/usuarios/1`);
  }
}
