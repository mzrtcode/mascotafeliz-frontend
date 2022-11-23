import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoMaterialModule } from './demo-material-module';
import { AppRoutes, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './modulos/layouts/full/full.component';
import { AppSidebarComponent } from './modulos/layouts/full/sidebar/sidebar.component';
import { SpinnerComponent } from './modulos/shared/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppHeaderComponent } from './modulos/layouts/full/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './modulos/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NuevoMascotaComponent } from './modulos/mascotas/nuevo-mascota/nuevo-mascota.component';
import { MascotasAsesorComponent } from './modulos/asesor/mascotas/mascotas-asesor/mascotas-asesor.component';
import { ProspectosComponent } from './modulos/asesor/prospectos/prospectos.component';
import { InicioComponent } from './modulos/inicio/inicio.component';


@NgModule({
    declarations: [
      AppComponent,
      FullComponent,
      AppHeaderComponent,
      SpinnerComponent,
      AppSidebarComponent,
      NuevoMascotaComponent,
      MascotasAsesorComponent,
      ProspectosComponent,
      InicioComponent
    ],
    providers: [
      {
        provide: LocationStrategy,
        useClass: PathLocationStrategy
      }
    ],
    bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      DemoMaterialModule,
      FormsModule,
      FlexLayoutModule,
      HttpClientModule,
      SharedModule,
      RouterModule.forRoot(AppRoutes),
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule

    ]
})
export class AppModule { }
