import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const URL = 'http://[::1]:3000';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(private _http:HttpClient) { }


  getSucursales(){
    return (this._http.get(`${URL}/sucursales`));
   }

   deleteSucursal(id:string){
     return this._http.delete(`${URL}/sucursales/${id}`);
   }

   registerSucursal(sucursal:any){

     return this._http.post<any>(`${URL}/sucursales`,sucursal)
   }

   updateSucursal(sucursal:any){
     return this._http.put<any>(`${URL}/sucursales/${sucursal.id}`,sucursal)

   }
}
