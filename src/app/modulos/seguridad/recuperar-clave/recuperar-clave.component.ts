import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'correo': ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder,private _usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }
  recuperarClave(){

  }
}
