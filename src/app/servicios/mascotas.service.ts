import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://[::1]:3000';
@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private _http:HttpClient) { }


  getMascotas(){
    return (this._http.get(`${URL}/mascotas`));
   }

   deleteMascota(id:string){
     return this._http.delete(`${URL}/mascotas/${id}`);
   }

   registerMascota(mascota:any){

     return this._http.post<any>(`${URL}/mascotas`,mascota)
   }

   updateMascota(mascota:any){
     return this._http.put<any>(`${URL}/mascotas/${mascota.id}`,mascota)

   }
}
