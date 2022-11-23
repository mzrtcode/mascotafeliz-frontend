import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/servicios/usuario.service';

import Swal from 'sweetalert2';
import { EditarSucursalComponent } from '../sucursal/editar-sucursal/editar-sucursal.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  listUsuariosAPI: any = [];

  displayedColumns: string[] = ['id', 'documento', 'nombre', 'apellido', 'correo', 'telefono', 'rol','acciones'];
  dataSource!: MatTableDataSource<any>;
  dataSourceAPI!: MatTableDataSource<any>;




  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private _usuarioService:UsuarioService, public dialog: MatDialog) {

  }

  //MODAL
  nuevoUsuario() {
    this.dialog.open(NuevoUsuarioComponent).afterClosed().subscribe(res =>{
      this.cargarUsuarios();
    });
  }
  ngOnInit(): void {
    this.cargarUsuarios();

  }

  eliminarUsuario(element:any){

    let userID = element.id;
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
        this._usuarioService.deleteUsuarios(userID).subscribe(()=> {
          console.log(`Usuario ${userID} ::ELIMINADO::`)
          this.ngOnInit();
        })
        Swal.fire(
          'Eliminado!',
          'El usuario ha sido eliminado',
          'success'
        )
      }
    })

  }

  //MODAL
  actualizarUsuario(usuario:any){
    this.dialog.open(EditarUsuarioComponent,{
      data:usuario
    }).afterClosed().subscribe((value)=>{
      this.cargarUsuarios();
    })

  }

  cargarUsuarios(): void {


    this._usuarioService.getDataApi().subscribe(res =>{
      this.listUsuariosAPI = res;
      this.dataSourceAPI = new MatTableDataSource(this.listUsuariosAPI);
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
