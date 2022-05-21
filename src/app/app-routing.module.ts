import { InicioComponent } from './paginas/inicio/inicio.component';
import { AcercaDeComponent } from './paginas/acerca-de/acerca-de.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "tienda", component: TiendaComponent},
  {path: "servicios", component: ServiciosComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "acerca-de", component: AcercaDeComponent},
  {path: "inicio", component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
