
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

import Swal from 'sweetalert2';
import { EditarUsuarioComponent } from '../../usuarios/editar-usuario/editar-usuario.component';
import { ClienteDetalllesComponent } from './cliente-detallles/cliente-detallles.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';





@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {




  displayedColumns: string[] = ['id', 'documento', 'nombre', 'apellido', 'correo', 'telefono', 'rol','acciones'];

  dataSourceAPI!: MatTableDataSource<any>;






  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private _usuarioService:UsuarioService, public dialog: MatDialog) {

  }

  //MODAL
  nuevoUsuario() {
    this.dialog.open(NuevoClienteComponent).afterClosed().subscribe(res =>{
      this.cargarUsuarios();
    });
  }
  ngOnInit(): void {
    this.cargarUsuarios();

  }



  mostrarMascotasCliente(cliente:any){
    this.dialog.open(ClienteDetalllesComponent,{
      data:cliente
    }).afterClosed().subscribe((value)=>{
      console.log('gg')
    })
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

      if(Array.isArray(res)){
        let users= res.filter(res => res.rol == 'Cliente')
        this.dataSourceAPI = new MatTableDataSource(users)

      }

  })


  }

  ngAfterViewInit() {
    this.dataSourceAPI.paginator = this.paginator;
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAPI.filter = filterValue.trim().toLowerCase();
  }

}
