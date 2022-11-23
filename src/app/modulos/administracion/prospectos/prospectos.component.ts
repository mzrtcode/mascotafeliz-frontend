import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProspectosService } from 'src/app/servicios/prospectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prospectos',
  templateUrl: './prospectos.component.html',
  styleUrls: ['./prospectos.component.css']
})
export class ProspectosComponent implements OnInit {


  listProspectosAPI: any = [];
  dataSourceAPI!: MatTableDataSource<any>;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id','nombres', 'apellidos', 'correo', 'telefono', 'comentario','estado', 'acciones'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _prospectoService:ProspectosService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.cargarProspectos();
  }

  cargarProspectos(): void {

    this._prospectoService.getProspectos().subscribe(res =>{
      this.listProspectosAPI = res;
      this.dataSourceAPI = new MatTableDataSource(this.listProspectosAPI);
    })
    this.dataSource = new MatTableDataSource(this.listProspectosAPI);
  }

  aceptarProspecto(prospecto:any){
    let prospectoActualizar ={
      id: prospecto.id,
      nombre: prospecto.nombre,
      apellido: prospecto.apellido,
      correo: prospecto.correo,
      telefono: prospecto.telefono,
      comentario: prospecto.comentario,
      estado: 'Aceptado'
    }

    this._prospectoService.updateProspecto(prospectoActualizar).subscribe(() => {
      console.log('Prospecto modificado')
      this.ngOnInit();
      Swal.fire(
        '¡Correcto!',
        'Se ha cambiado el estado!',
        'success'
      )
    })

  }

  rechazarProspecto(prospecto:any){
    let prospectoActualizar ={
      id: prospecto.id,
      nombre: prospecto.nombre,
      apellido: prospecto.apellido,
      correo: prospecto.correo,
      telefono: prospecto.telefono,
      comentario: prospecto.comentario,
      estado: 'Rechazado'
    }

    this._prospectoService.updateProspecto(prospectoActualizar).subscribe(() => {
      console.log('Prospecto modificado')
      this.ngOnInit();

      Swal.fire(
        '¡Correcto!',
        'Se ha cambiado el estado!',
        'success'
      )
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
