import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'documento': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],
    'telefono': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,private _usuarioService:UsuarioService) { }


  ngOnInit(): void {

  }

  registrarUsuario() {

    let nuevoUsuario = {
      nombre: this.fgValidador.controls['nombres'].value,
      apellido: this.fgValidador.controls['apellidos'].value,
      documento: String(this.fgValidador.controls['documento'].value),
      correo: this.fgValidador.controls['correo'].value,
      telefono: String(this.fgValidador.controls['telefono'].value),
      rol: 'Cliente'
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
