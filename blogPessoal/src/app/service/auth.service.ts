import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

logar(userlogin:UserLogin){

  return this.http.post('http://localhost:8080/usuarios/logar',userlogin)
}

cadastrar(user:User){
  
  return this.http.post('http://localhost:8080/usuarios/cadastrar',user)
}

}
