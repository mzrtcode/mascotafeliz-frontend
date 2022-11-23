
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { SucursalService } from 'src/app/servicios/sucursal.service';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit{


  fgValidador: FormGroup = this.fb.group({
    'departamento': ['', [Validators.required]],
    'ciudad': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],

  });



  constructor(private fb: FormBuilder,private _sucursalService:SucursalService, @Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {


    if(this.editData){
      this.fgValidador.controls['departamento'].setValue(this.editData.departamento);
      this.fgValidador.controls['ciudad'].setValue(this.editData.ciudad);
      this.fgValidador.controls['direccion'].setValue(this.editData.direccion);
    }
  }



  modificarSucursal() {

    let mascotaModificada = {
      id: this.editData.id,
      departamento: this.fgValidador.controls['departamento'].value,
      ciudad: this.fgValidador.controls['ciudad'].value,
      direccion: this.fgValidador.controls['direccion'].value
    }

    console.log(mascotaModificada)
    this._sucursalService.updateSucursal(mascotaModificada).subscribe(() => {
      console.log('Mascota modificada')

      Swal.fire(
        '¡Correcto!',
        'La mascota ha sido modificado!',
        'success'
      )
    })

  }
}
