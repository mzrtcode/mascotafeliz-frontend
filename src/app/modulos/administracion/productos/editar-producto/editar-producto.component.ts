
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit{


  fgValidador: FormGroup = this.fb.group({
    'tipo': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'proveedor': ['', [Validators.required]],
  });



  constructor(private fb: FormBuilder,private _productoService:ProductoService, @Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {


    if(this.editData){
      this.fgValidador.controls['tipo'].setValue(this.editData.tipo);
      this.fgValidador.controls['nombre'].setValue(this.editData.nombre);
      this.fgValidador.controls['precio'].setValue(this.editData.precio);
      this.fgValidador.controls['descripcion'].setValue(this.editData.descripcion);
      this.fgValidador.controls['proveedor'].setValue(this.editData.proveedor);

    }
  }



  modificarProducto() {

    let productoModificado = {
      id: this.editData.id,
      tipo: this.fgValidador.controls['tipo'].value,
      nombre: this.fgValidador.controls['nombre'].value,
      precio: Number(this.fgValidador.controls['precio'].value),
      descripcion: this.fgValidador.controls['descripcion'].value,
      proveedor: this.fgValidador.controls['proveedor'].value,
    }

      console.log(productoModificado)
    this._productoService.updateProducto(productoModificado).subscribe(() => {
      console.log('Producto Modificado')

      Swal.fire(
        '¡Correcto!',
        'El producto ha sido modificado!',
        'success'
      )
    })




  }
}
