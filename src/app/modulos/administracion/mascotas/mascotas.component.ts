import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import Swal from 'sweetalert2';
import { EditarMascotaComponent } from './editar-mascota/editar-mascota.component';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})

export class MascotasComponent implements OnInit{
  listaMascotas: any = [];

  displayedColumns: string[] = ['id', 'nombre', 'foto', 'especie', 'estadoAfiliacion', 'acciones'];
  dataSource!: MatTableDataSource<any>;
  dataSourceAPI!: MatTableDataSource<any>;



  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private _mascotasService:MascotasService, public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.cargarMascotas();
  }

  nuevoMascota(){

  }

  cargarMascotas(): void {
    this.listaMascotas = this._mascotasService.getMascotas();

    this._mascotasService.getMascotas().subscribe(res =>{
      this.listaMascotas = res;
      this.dataSourceAPI = new MatTableDataSource(this.listaMascotas);
    })

  }
  actualizarMascota(mascota:any){
    this.dialog.open(EditarMascotaComponent,{
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
