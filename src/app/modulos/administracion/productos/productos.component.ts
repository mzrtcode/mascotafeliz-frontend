import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  listaProductos: any = [];

  displayedColumns: string[] = ['id', 'tipo', 'precio', 'descripcion', 'proveedor','acciones'];
  dataSource!: MatTableDataSource<any>;
  dataSourceAPI!: MatTableDataSource<any>;




  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _productoService:ProductoService, public dialog: MatDialog) {

  }

  nuevoProducto(){
    this.dialog.open(NuevoProductoComponent).afterClosed().subscribe(res =>{
      this.cargarProductos();
    });



  }


  actualizarProducto(producto:any){
    this.dialog.open(EditarProductoComponent,{
      data:producto
    }).afterClosed().subscribe((value)=>{
      this.cargarProductos();
    })

  }
  cargarProductos(): void {
    this.listaProductos = this._productoService.getProductos();

    this._productoService.getProductos().subscribe(res =>{
      this.listaProductos = res;
      this.dataSourceAPI = new MatTableDataSource(this.listaProductos);
    })
    this.dataSource = new MatTableDataSource(this.listaProductos);

  }

  ngOnInit(): void {
    this.cargarProductos();

  }

  eliminarProducto(producto:any){

    let id = producto.id;
    this._productoService.deleteProducto(id);


    Swal.fire({
      title: 'Estas seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1e88e5',
      cancelButtonColor: '#e91e63',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        //Codigo para eliminar
        this._productoService.deleteProducto(id).subscribe(()=> {
          console.log(`Producto ${id} ::ELIMINADO::`)
          this.ngOnInit();
        })
        Swal.fire(
          'Eliminado!',
          'El producto ha sido eliminado',
          'success'
        )
      }
    })


  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
