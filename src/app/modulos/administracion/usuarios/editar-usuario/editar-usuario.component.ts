import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({


  selector: 'app-editar',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit{


  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'documento': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],
    'telefono': ['', [Validators.required]],
    'rol': ['', [Validators.required]],
  });



  constructor(private fb: FormBuilder,private _usuarioService:UsuarioService, @Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {



    if(this.editData){
      this.fgValidador.controls['nombre'].setValue(this.editData.nombre);
      this.fgValidador.controls['apellido'].setValue(this.editData.apellido);
      this.fgValidador.controls['documento'].setValue(this.editData.documento);
      this.fgValidador.controls['correo'].setValue(this.editData.correo);
      this.fgValidador.controls['telefono'].setValue(this.editData.telefono);
      this.fgValidador.controls['rol'].setValue(this.editData.rol);

    }
  }



  modificarUsuario() {

    let usuarioModificado = {
      id: this.editData.id,
      nombre: this.fgValidador.controls['nombre'].value,
      apellido: this.fgValidador.controls['apellido'].value,
      documento: this.fgValidador.controls['documento'].value,
      correo: this.fgValidador.controls['correo'].value,
      telefono: this.fgValidador.controls['telefono'].value,
      rol: this.fgValidador.controls['rol'].value,
    }

    this._usuarioService.updateUsuario(usuarioModificado).subscribe(() => {
      console.log('usuario Modificado')

      Swal.fire(
        '¡Correcto!',
        'El usuario ha sido modificado!',
        'success'
      )
    })




  }
}
