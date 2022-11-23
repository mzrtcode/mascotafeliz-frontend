import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarSesionGuard } from 'src/app/guardianes/validar-sesion.guard';
import { ClienteMascotasComponent } from './cliente-mascotas/cliente-mascotas.component';
import { ClientePlanesComponent } from './cliente-planes/cliente-planes.component';
import { ClienteProductosComponent } from './cliente-productos/cliente-productos.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'cliente-planes', component:ClientePlanesComponent, canActivate: [ValidarSesionGuard]},
      {path:'cliente-mascotas', component:ClienteMascotasComponent, canActivate: [ValidarSesionGuard]},
      {path:'cliente-productos', component:ClienteProductosComponent, canActivate: [ValidarSesionGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
