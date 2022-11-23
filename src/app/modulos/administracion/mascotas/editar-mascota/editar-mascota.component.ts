
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit{


  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'estadoAfiliacion': ['', [Validators.required]],
  });



  constructor(private fb: FormBuilder,private _mascotaService:MascotasService, @Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {


    if(this.editData){
      this.fgValidador.controls['nombre'].setValue(this.editData.nombre);
      this.fgValidador.controls['foto'].setValue(this.editData.foto);
      this.fgValidador.controls['especie'].setValue(this.editData.especie);
      this.fgValidador.controls['estadoAfiliacion'].setValue(this.editData.estadoAfiliacion);
    }
  }



  modificarMascota() {

    let productoModificado = {
      id: this.editData.id,
      nombre: this.fgValidador.controls['nombre'].value,
      foto: this.fgValidador.controls['foto'].value,
      especie: this.fgValidador.controls['especie'].value,
      estadoAfiliacion: this.fgValidador.controls['estadoAfiliacion'].value,
      usuariosId: 'test',
      planId: 'test'
    }

    console.log(productoModificado)
    this._mascotaService.updateMascota(productoModificado).subscribe(() => {
      console.log('Mascota modificada')

      Swal.fire(
        '¡Correcto!',
        'El mascota ha sido modificado!',
        'success'
      )
    })

  }
}
