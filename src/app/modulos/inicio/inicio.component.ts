import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProspectosService } from 'src/app/servicios/prospectos.service';

import Swal from 'sweetalert2';





@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],
    'telefono': ['', [Validators.required]],
    'comentario': ['', [Validators.required]],
  });



  constructor(private fb:FormBuilder,private _prospectoService:ProspectosService) { }

  ngOnInit(): void {

  }
  registrarProspecto(){
    let nuevoProspecto = {
      nombre: this.fgValidador.controls['nombre'].value,
      apellido: this.fgValidador.controls['apellido'].value,
      correo: this.fgValidador.controls['correo'].value,
      telefono: this.fgValidador.controls['telefono'].value,
      comentario: this.fgValidador.controls['comentario'].value,
      estado: 'Pendiente'
    }
    console.log(nuevoProspecto)

    this._prospectoService.registerProspecto(nuevoProspecto).subscribe(() => {
      console.log('solicitud enviada')
      Swal.fire(
        '¡Correcto!',
        'Su solicitud ha sido registrada!',
        'success'
      )
    })
  }

}
