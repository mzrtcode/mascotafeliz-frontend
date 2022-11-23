import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

const URL = 'http://[::1]:3000';
let users:any = [];

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {








  constructor(private _http:HttpClient) { }



  getDataApi(){
   return (this._http.get(`${URL}/usuarios`));
  }

  deleteUsuarios(id:string){
    return this._http.delete(`${URL}/usuarios/${id}`);
  }

  registerUser(user:any){

    return this._http.post<any>(`${URL}/usuarios`,user)
  }

  updateUsuario(user:any){
    return this._http.put<any>(`${URL}/usuarios/${user.id}`,user)

  }



}



