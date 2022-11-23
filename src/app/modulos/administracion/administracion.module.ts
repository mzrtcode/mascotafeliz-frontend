import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {  NuevoUsuarioComponent } from './usuarios/nuevo-usuario/nuevo-usuario.component';
import { ProductosComponent } from './productos/productos.component';
import { PlanesComponent } from './planes/planes.component';
import { ProspectosComponent } from './prospectos/prospectos.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { NuevoProductoComponent } from './productos/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { NuevoPlanComponent } from './planes/nuevo-plan/nuevo-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { NuevaSucursalComponent } from './sucursal/nueva-sucursal/nueva-sucursal.component';
import { EditarClienteComponent } from './asesor/clientes/editar-cliente/editar-cliente.component';
import { NuevoClienteComponent } from './asesor/clientes/nuevo-cliente/nuevo-cliente.component';
import { ClientesComponent } from './asesor/clientes/clientes.component';
import { ClienteDetalllesComponent } from './asesor/clientes/cliente-detallles/cliente-detallles.component';
import { MascotasAsesorComponent } from './asesor/mascotas-asesor/mascotas-asesor.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    NuevoUsuarioComponent,
    ProductosComponent,
    PlanesComponent,
    ProspectosComponent,
    MascotasComponent,
    SucursalComponent,
    EditarUsuarioComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    NuevoPlanComponent,
    EditarPlanComponent,
    EditarMascotaComponent,
    EditarSucursalComponent,
    NuevaSucursalComponent,
    EditarClienteComponent,
    NuevoClienteComponent,
    ClientesComponent,
    ClienteDetalllesComponent,
    MascotasAsesorComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
