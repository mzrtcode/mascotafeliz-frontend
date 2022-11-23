import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import Swal from 'sweetalert2';
import { ClienteEditarMascotaComponent } from './cliente-editar-mascota/cliente-editar-mascota.component';
import { ClienteNuevoMascotasComponent } from './cliente-nuevo-mascotas/cliente-nuevo-mascotas.component';


@Component({
  selector: 'app-cliente-mascotas',
  templateUrl: './cliente-mascotas.component.html',
  styleUrls: ['./cliente-mascotas.component.css']
})

export class ClienteMascotasComponent implements OnInit{


  displayedColumns: string[] = ['id', 'nombre', 'foto', 'especie', 'estadoAfiliacion', 'acciones'];
  dataSource!: MatTableDataSource<any>;
  dataSourceAPI!: MatTableDataSource<any>;
  idCliente:string = '';


  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private _mascotasService:MascotasService, public dialog: MatDialog, private seguridadServicio:SeguridadService) {

  }
  ngOnInit(): void {
    this.cargarMascotas();
    this.idCliente = this.seguridadServicio.obtenerIDusuario();
    console.log(this.idCliente)
  }

  nuevoMascota(){
    this.seguridadServicio.obtenerIDusuario()
    this.dialog.open(ClienteNuevoMascotasComponent,{
      data:this.idCliente
    }).afterClosed().subscribe((value)=>{
      this.cargarMascotas();
    })
  }

  cargarMascotas(): void {

    this._mascotasService.getMascotas().subscribe(res =>{

      if (Array.isArray(res)) {
        let mascotasUsuario = res.filter(res => res.usuariosId == this.idCliente)
        this.dataSourceAPI = new MatTableDataSource(mascotasUsuario);
      }


    })

  }
  actualizarMascota(mascota:any){
    this.dialog.open(ClienteEditarMascotaComponent,{
      data:mascota
    }).afterClosed().subscribe((value)=>{
      this.cargarMascotas();
    })
  }

  eliminarMascota(mascota:any){
    let id = mascota.id;
    this._mascotasService.deleteMascota(id);


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
        this._mascotasService.deleteMascota(id).subscribe(()=> {
          console.log(`Mascota ${id} ::ELIMINADO::`)
          this.ngOnInit();
        })
        Swal.fire(
          'Eliminado!',
          'La mascota ha sido eliminada',
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
