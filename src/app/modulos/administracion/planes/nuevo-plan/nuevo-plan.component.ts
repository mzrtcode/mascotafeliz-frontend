import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanesService } from 'src/app/servicios/planes.service';
import { ProductoService } from 'src/app/servicios/producto.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-plan',
  templateUrl: './nuevo-plan.component.html',
  styleUrls: ['./nuevo-plan.component.css']
})


export class NuevoPlanComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,private _planService:PlanesService) { }


  ngOnInit(): void {

  }

  registrarProducto() {

    let nuevoProducto = {
      nombre: this.fgValidador.controls['nombre'].value,
      foto: 'none.jpg',
      descripcion: this.fgValidador.controls['descripcion'].value,
      precio: Number(this.fgValidador.controls['precio'].value)
    }

  this._planService.registerPlan(nuevoProducto).subscribe(() => {
      console.log('Plan registrado')
      Swal.fire(
        '¡Correcto!',
        'El plan ha sido registrado!',
        'success'
      )
    })



  }
}



