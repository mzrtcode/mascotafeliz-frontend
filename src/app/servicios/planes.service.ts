import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const URL = 'http://[::1]:3000';


@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(private _http:HttpClient) { }


  getPlanes(){
    return (this._http.get(`${URL}/planes`));
   }

   deletePlan(id:string){
     return this._http.delete(`${URL}/planes/${id}`);
   }

   registerPlan(plan:any){

     return this._http.post<any>(`${URL}/planes`,plan)
   }

   updatePlan(plan:any){
     return this._http.put<any>(`${URL}/planes/${plan.id}`,plan)

   }

}
