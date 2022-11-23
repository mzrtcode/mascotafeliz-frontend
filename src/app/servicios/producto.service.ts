import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

const URL = 'http://[::1]:3000';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http:HttpClient) { }


  getProductos(){
    return (this._http.get(`${URL}/productos-servicios`));
  }

  deleteProducto(id:string){
    return this._http.delete(`${URL}/productos-servicios/${id}`);
  }

  registerProducto(producto:any){
    console.log(producto)
    return this._http.post<any>(`${URL}/productos-servicios`,producto)
  }

  updateProducto(producto:any){
    return this._http.put<any>(`${URL}/productos-servicios/${producto.id}`,producto)

  }

}
