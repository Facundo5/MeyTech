import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './reutilizables/footer/footer.component';
import { NavbarComponent } from './reutilizables/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    InicioComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
