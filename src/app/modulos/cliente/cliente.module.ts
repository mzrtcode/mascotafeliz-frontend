import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteMascotasComponent } from './cliente-mascotas/cliente-mascotas.component';
import { ClienteProductosComponent } from './cliente-productos/cliente-productos.component';
import { ClientePlanesComponent } from './cliente-planes/cliente-planes.component';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { ClienteEditarMascotaComponent } from './cliente-mascotas/cliente-editar-mascota/cliente-editar-mascota.component';
import { ClienteNuevoMascotasComponent } from './cliente-mascotas/cliente-nuevo-mascotas/cliente-nuevo-mascotas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClienteMascotasComponent,
    ClienteProductosComponent,
    ClientePlanesComponent,
    ClienteEditarMascotaComponent,
    ClienteNuevoMascotasComponent


  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
