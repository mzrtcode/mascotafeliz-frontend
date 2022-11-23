
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/servicios/producto.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-cliente-nuevo-mascotas',
  templateUrl: './cliente-nuevo-mascotas.component.html',
  styleUrls: ['./cliente-nuevo-mascotas.component.css']
})
export class ClienteNuevoMascotasComponent implements OnInit {


  clienteID: string = '';
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'especie': ['', [Validators.required]],

  });

  constructor(private fb: FormBuilder,  @Inject(MAT_DIALOG_DATA) public dataMODAL:any, private _mascotaService:MascotasService) { }


  ngOnInit(): void {

  }

  registrarMascota(){

    let nuevaMascota = {
      nombre: this.fgValidador.controls['nombre'].value,
      foto: this.fgValidador.controls['foto'].value,
      especie: this.fgValidador.controls['especie'].value,
      estadoAfiliacion: 'Pendiente',
      usuariosId: this.dataMODAL,
      planId: 'default'
    }


    this._mascotaService.registerMascota(nuevaMascota).subscribe(() => {
      this.ngOnInit()
      Swal.fire(
        '¡Correcto!',
        'La mascota ha sido registrada!',
        'success'
      )
    })
  }
}









