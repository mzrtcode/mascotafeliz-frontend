import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PlanesService } from 'src/app/servicios/planes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-planes',
  templateUrl: './cliente-planes.component.html',
  styleUrls: ['./cliente-planes.component.css']
})
export class ClientePlanesComponent implements OnInit {

  listaPlanesAPI: any = [];

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'precio', 'acciones'];
  dataSource!: MatTableDataSource<any>;
  dataSourceAPI!: MatTableDataSource<any>;




  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _planesService:PlanesService, public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.cargarPlanes();
  }





  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarPlanes(): void {
    this.listaPlanesAPI = this._planesService.getPlanes();

    this._planesService.getPlanes().subscribe(res =>{
      this.listaPlanesAPI = res;
      this.dataSourceAPI = new MatTableDataSource(this.listaPlanesAPI);
    })
    this.dataSource = new MatTableDataSource(this.listaPlanesAPI);
    console.log(this.listaPlanesAPI)

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 comprar(){
  Swal.fire({
    title: 'Estas seguro?',
    text: "¡Que deseas aquirir este plan!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#1e88e5',
    cancelButtonColor: '#e91e63',
    confirmButtonText: 'Si, comprar'
  }).then((result) => {
    if (result.isConfirmed) {
      //Codigo para eliminar
      Swal.fire(
        'Plan aquirido!',
        'El plan ha sido aquirido',
        'success'
      )

    }
  })
 }


  eliminarPlan(plan:any){
    let id = plan.id;

    this._planesService.deletePlan(id);


    Swal.fire({
      title: 'Estas seguro que deseas comprar este plan?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1e88e5',
      cancelButtonColor: '#e91e63',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        //Codigo para eliminar
        this._planesService.deletePlan(id).subscribe(()=> {
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


}
