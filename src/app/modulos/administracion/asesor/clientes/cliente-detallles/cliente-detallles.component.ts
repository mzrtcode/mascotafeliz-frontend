import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-cliente-detallles',
  templateUrl: './cliente-detallles.component.html',
  styleUrls: ['./cliente-detallles.component.css']
})
export class ClienteDetalllesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'foto', 'especie', 'estadoAfiliacion'];
  dataSourceMascotasCliente!: MatTableDataSource<any>;

  constructor(private _mascotaService:MascotasService, @Inject(MAT_DIALOG_DATA) public datosCliente:any) { }

  ngOnInit(): void {
    this.traerMascotasCliente()
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  traerMascotasCliente(){
    this._mascotaService.getMascotas().subscribe(res =>{

      if(Array.isArray(res)){
        let mascotas= res.filter(res => res.usuariosId == this.datosCliente.id)
        this.dataSourceMascotasCliente = new MatTableDataSource(mascotas)
        console.log(mascotas)
      }

  })
  }

  ngAfterViewInit() {
    this.dataSourceMascotasCliente.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceMascotasCliente.filter = filterValue.trim().toLowerCase();
  }
}
