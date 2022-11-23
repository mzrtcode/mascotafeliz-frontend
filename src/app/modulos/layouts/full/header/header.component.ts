import { Component } from '@angular/core';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  constructor(private servicioSegurdad: SeguridadService){}


  cerrarSesion(){
    this.servicioSegurdad.cerrarSesion();
  }
}
