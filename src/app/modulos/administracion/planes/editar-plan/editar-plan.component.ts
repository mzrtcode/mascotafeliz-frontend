import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PlanesService } from 'src/app/servicios/planes.service';


@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrls: ['./editar-plan.component.css']
})


export class EditarPlanComponent implements OnInit{


  fgValidador: FormGroup = this.fb.group({

    'nombre': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],

  });



  constructor(private fb: FormBuilder,private _planService:PlanesService, @Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {


    if(this.editData){
      this.fgValidador.controls['nombre'].setValue(this.editData.nombre);
      this.fgValidador.controls['descripcion'].setValue(this.editData.descripcion);
      this.fgValidador.controls['precio'].setValue(this.editData.precio);

    }
  }



  editarPlan() {

    let planModificado = {
      id: this.editData.id,
      nombre: this.fgValidador.controls['nombre'].value,
      foto: 'none.jpg',
      descripcion: this.fgValidador.controls['descripcion'].value,
      precio: Number(this.fgValidador.controls['precio'].value),
    }
    console.log(planModificado)

    this._planService.updatePlan(planModificado).subscribe(() => {
      console.log('Plan Modificado')

      Swal.fire(
        '¡Correcto!',
        'El plan ha sido modificado!',
        'success'
      )
    })

  }


}
