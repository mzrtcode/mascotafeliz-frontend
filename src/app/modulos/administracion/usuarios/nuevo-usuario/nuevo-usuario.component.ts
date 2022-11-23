import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})

export class NuevoUsuarioComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'documento': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],
    'telefono': ['', [Validators.required]],
    'rol': ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,private _usuarioService:UsuarioService) { }


  ngOnInit(): void {

  }

  registrarUsuario() {

    let nuevoUsuario = {
      nombre: this.fgValidador.controls['nombre'].value,
      apellido: this.fgValidador.controls['apellido'].value,
      documento: this.fgValidador.controls['documento'].value,
      correo: this.fgValidador.controls['correo'].value,
      telefono: this.fgValidador.controls['telefono'].value,
      rol: this.fgValidador.controls['rol'].value,
    }

    this._usuarioService.registerUser(nuevoUsuario).subscribe(() => {
      console.log('usuario registrado')
      console.log(nuevoUsuario)
      Swal.fire(
        '¡Correcto!',
        'El usuario ha sido registrado!',
        'success'
      )
    })



  }

}
