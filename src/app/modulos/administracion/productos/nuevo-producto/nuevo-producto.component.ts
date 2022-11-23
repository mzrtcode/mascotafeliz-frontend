import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/servicios/producto.service';

import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'tipo': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'proveedor': ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,private _productoService:ProductoService) { }


  ngOnInit(): void {

  }

  registrarProducto() {

    let nuevoProducto = {
      tipo: this.fgValidador.controls['tipo'].value,
      nombre: this.fgValidador.controls['nombre'].value,
      foto:'default.png',
      precio: Number(this.fgValidador.controls['precio'].value),
      descripcion: this.fgValidador.controls['descripcion'].value,
      proveedor: this.fgValidador.controls['proveedor'].value,
    }

  this._productoService.registerProducto(nuevoProducto).subscribe(() => {
      console.log('Producto registrado')
      Swal.fire(
        '¡Correcto!',
        'El producto ha sido registrado!',
        'success'
      )
    })



  }
}



