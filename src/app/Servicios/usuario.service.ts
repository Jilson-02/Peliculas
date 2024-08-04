import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  login(email: string, password: string){
    let datos = {
      email:email,
      password:password
    }

    return this.http.post('http://127.0.0.1:3000/api/login', datos)
  }


  register(user: string, email: string, password: string ){
    let datos = {
      user:user,
      email:email,
      password:password
    }
    return this.http.post('http://127.0.0.1:3000/api/register', datos)
  }


  getMovies(){
    return this.http.get('https://api.potterdb.com/v1/books');
  }

  detalle(id: string){
    return this.http.get('https://api.potterdb.com/v1/books'+id);
  }
}
