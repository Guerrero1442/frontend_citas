import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseLogin } from '../models/auth.model';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { TokenService } from './token.service';
import { User } from '../models/user.model';
import { Medico } from '../models/medico.model';
import { Paciente } from '../models/paciente.model';

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
        localStorage.setItem('infoAdicional', JSON.stringify(res.infoAdicional));
      })
    )
  }

  register(name:string, email:string,password:string){
    return this.http.post(`${this.API_URL}/auth/register`, {name, email, password})
  }

  registerAndLogin(name:string,email:string,password:string){
    return this.register(name,email,password).pipe(
      switchMap(() => this.login(email,password)))
  }

  getProfile(){
    return this.http.get(`${this.API_URL}/auth/profile`)
  }
}
