import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginauthService {
jwt = new JwtHelperService();
decodedone: any;
constructor(private http: HttpClient) { }
  baseurl = 'http://localhost:5000/api/auth/';


  login(model: any) {
    return this.http.post(this.baseurl + 'login' , model).pipe(map((response: any) => {
      const user = response;
      localStorage.setItem('token', user.token);
      }));
  }

  register(model: any) {
    return this.http.post(this.baseurl + 'register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwt.isTokenExpired(token);
  }
}
