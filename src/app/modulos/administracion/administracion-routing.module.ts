import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarSesionGuard } from 'src/app/guardianes/validar-sesion.guard';
import { ClientesComponent } from './asesor/clientes/clientes.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { PlanesComponent } from './planes/planes.component';
import { ProductosComponent } from './productos/productos.component';
import { ProspectosComponent } from './prospectos/prospectos.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'usuarios', component:UsuariosComponent},
      {path:'mascotas', component:MascotasComponent, canActivate:[ValidarSesionGuard]},
      {path:'planes', component:PlanesComponent, canActivate:[ValidarSesionGuard]},
      {path:'productos', component:ProductosComponent, canActivate:[ValidarSesionGuard]},
      {path:'prospectos', component:ProspectosComponent, canActivate:[ValidarSesionGuard]},
      {path:'sucursales', component:SucursalComponent, canActivate:[ValidarSesionGuard]},
      {path:'clientes', component:ClientesComponent, canActivate:[ValidarSesionGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
