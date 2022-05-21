import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaComponent } from './tienda/tienda.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { Url } from 'url';



@NgModule({
  declarations: [
    TiendaComponent,
    AcercaDeComponent,
    ServiciosComponent,
    ContactoComponent,
    InicioComponent,
    TiendaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaginasModule { }
