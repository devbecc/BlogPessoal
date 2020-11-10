import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) {
    return this.http.post('http://localhost:8080/usuarios/logar', userLogin)
  } //localhost:9000 por conta do docker, caso o docker não esteja funcionando, acredito que use localhost:8080, será no caso a porta que está usando no sts

  cadastrar(user: User) {
    return this.http.post('http://localhost:8080/usuarios/cadastrar', user)
  }

  btnSair() {
    let ok = false
    let token = localStorage.getItem('token')

    if(token != null) {
      ok = true
    }

    return ok
  }

  btnLogin() {
    let ok = false
    let token = localStorage.getItem('token')

    if(token == null) {
      ok = true
    }

    return ok
  }

}
