import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseLogin } from '../models/auth.model';
import { Observable, switchMap, tap } from 'rxjs';
import { TokenService } from './token.service';
import { CrearPacienteDTO, Paciente } from '../models/paciente.model';
import { Medico } from '../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = environment.API_URL;

  constructor(private http:HttpClient, private tokenService: TokenService) { }

  login(email: string, password: string){
    return this.http.post<ResponseLogin>(`${this.API_URL}/login`, {email, password})
    .pipe(
      tap((res: ResponseLogin) => {
        this.tokenService.saveToken(res.token);
      })
    )
  }


  registerAndLoginPaciente(paciente: CrearPacienteDTO){
    return this.registerPaciente(paciente).pipe(
      switchMap(() => this.login(paciente.usuario.email, paciente.usuario.password)))
  }

  registerPaciente(paciente: CrearPacienteDTO): Observable<Paciente> {
    return this.http.post<Paciente>(`${this.API_URL}/paciente`, paciente);
  }

  getProfile(): Observable<Paciente | Medico > {
    const headers = {
      'Authorization': `Bearer ${this.tokenService.getToken()}`
    };
    return this.http.get<Paciente | Medico >(`${this.API_URL}/login/profile`, { headers });
  }

  logout(){
    this.tokenService.removeToken();
  }
}
