import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modulos/inicio/inicio.component';
import { FullComponent } from './modulos/layouts/full/full.component';

export const AppRoutes: Routes = [

  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
      },
      {
        path:'',
        loadChildren: () => import('./modulos/administracion/administracion.module').then(m => m.AdministracionModule)
      },
      {
        path:'',
        loadChildren: () => import('./modulos/cliente/cliente.module').then(m => m.ClienteModule)
      }
    ]
  },


  {path: 'inicio', component: InicioComponent},
  {path:'seguridad',
  loadChildren: () => import('./modulos/seguridad/seguridad.module').then( m => m.SeguridadModule)
  },
  {path:'administracion',
  loadChildren: () => import('./modulos/administracion/administracion.module').then(m => m.AdministracionModule)
  },


  {
    path:'**',
    redirectTo: 'inicio'
  },







];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
