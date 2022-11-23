import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

import { DemoMaterialModule } from 'src/app/demo-material-module';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProspectosService } from 'src/app/servicios/prospectos.service';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    DemoMaterialModule,

    FormsModule,
    ReactiveFormsModule,

    RouterModule,


  ]
})
export class InicioModule { }
