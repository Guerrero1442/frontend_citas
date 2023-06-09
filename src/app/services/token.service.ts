import { Injectable } from '@angular/core';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  saveToken(token: string) {
    setCookie('token', token, { expires: 365, path: '/' });
  }

  getToken() {
    return getCookie('token');
  }

  removeToken() {
    removeCookie('token');
  }
}
