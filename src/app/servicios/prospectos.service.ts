import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

const URL = 'http://[::1]:3000';

@Injectable({
  providedIn: 'root'
})
export class ProspectosService {

  constructor(private _http:HttpClient) { }


  getProspectos(){
    return (this._http.get('http://[::1]:3000/prospectos'));
   }


   deleteProspecto(id:string){
    return this._http.delete(`${URL}/prospectos/${id}`);
  }

  registerProspecto(prospecto:any){

    return this._http.post<any>(`${URL}/prospectos`,prospecto)
  }

  updateProspecto(prospecto:any){

    return this._http.put<any>(`${URL}/prospectos/${prospecto.id}`,prospecto)


  }

  estadoProspecto(prospecto:any){
    return this._http.patch<any>(`${URL}/prospectos/${prospecto.id}`,prospecto)
  }


}
