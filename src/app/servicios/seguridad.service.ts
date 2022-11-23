import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeloIdentificar } from './modelos/indetificar.modelo';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) {

  }


  Identificar(usuario: string, clave:string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarUsuario`,{
      usuario: usuario,
      clave: clave
    },{
      headers: new HttpHeaders({

      })
    })
  }



  obtenerRolSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos.datos.rol;
    }else{
      return null;
    }
  }

  AlmacenarSesion(datos: ModeloIdentificar){
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
  }

  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      console.log('daticos', datos.datos.rol)
      return datos;
    }else{
      return null;
    }
  }

  EliminarInformacionSesion(){
    localStorage.removeItem("datos");
  }

  SesionIniciada(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  cerrarSesion(){
    localStorage.removeItem("datosSesion");
    this.router.navigate(['/seguridad/login'])
/*     window.location.reload();
 */  }

  obtenerNombreUsuario(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return String(datos.datos.nombre + ' ' + datos.datos.apellido);
    }else{
      return 'Error';
    }
  }

  obtenerIDusuario(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos.datos.id;
    }else{
      return 'null';
    }
  }

}

