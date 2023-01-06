import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from 'src/model/jwt-dto';
import { LoginUsuario } from 'src/model/login-usuario';
import { NuevoUsuario } from 'src/model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authURL = environment.URL + 'auth/';
  authURL = 'https://portfolio-ramonserrano76.koyeb.app/auth/';
  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }
}