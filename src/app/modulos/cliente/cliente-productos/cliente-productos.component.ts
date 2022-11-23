import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-productos',
  templateUrl: './cliente-productos.component.html',
  styleUrls: ['./cliente-productos.component.css']
})
export class ClienteProductosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'tipo', 'precio', 'descripcion', 'proveedor','acciones'];
  listaProductos: any = [];
  dataSourceAPI!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _productoService:ProductoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  comprarProducto(){
    console.log('compranding...')
  }
  cargarProductos(): void {
    this.listaProductos = this._productoService.getProductos();

    this._productoService.getProductos().subscribe(res =>{
      this.listaProductos = res;
      this.dataSourceAPI = new MatTableDataSource(this.listaProductos);
    })
  }

  ngAfterViewInit() {
    this.dataSourceAPI.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAPI.filter = filterValue.trim().toLowerCase();
  }

  comprar(){
    Swal.fire({
      title: 'Estas seguro?',
      text: "¡que deseas aquirir este producto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1e88e5',
      cancelButtonColor: '#e91e63',
      confirmButtonText: 'Si, comprar'
    }).then((result) => {
      if (result.isConfirmed) {
        //Codigo para eliminar
        Swal.fire(
          'Producto aquirido!',
          'El producto ha sido aquirido',
          'success'
        )

      }
    })}

}
