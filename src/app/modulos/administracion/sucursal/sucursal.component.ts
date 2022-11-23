
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { SucursalService } from 'src/app/servicios/sucursal.service';
import Swal from 'sweetalert2';
import { EditarSucursalComponent } from './editar-sucursal/editar-sucursal.component';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})

export class SucursalComponent implements OnInit{
  listaSucursales: any = [];

  displayedColumns: string[] = ['id', 'departamento', 'ciudad', 'direccion', 'acciones'];
  dataSource!: MatTableDataSource<any>;
  dataSourceAPI!: MatTableDataSource<any>;



  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private _sucuralService:SucursalService, public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.cargarSucursales();
  }

  nuevaSucursal(){

  }

  cargarSucursales(): void {
    this.listaSucursales = this._sucuralService.getSucursales();

    this._sucuralService.getSucursales().subscribe(res =>{
      this.listaSucursales = res;
      this.dataSourceAPI = new MatTableDataSource(this.listaSucursales);
    })

  }
  actualizarSucursal(mascota:any){
    this.dialog.open(EditarSucursalComponent,{
      data:mascota
    }).afterClosed().subscribe((value)=>{
      this.cargarSucursales();
    })
  }

  eliminarSucursal(mascota:any){
    let id = mascota.id;
    this._sucuralService.deleteSucursal(id);


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
        this._sucuralService.deleteSucursal(id).subscribe(()=> {
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
