import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2RoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

import { DataService } from './data.service';
import { DetalleComponent } from './detalle/detalle.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DetalleCarritoComponent } from './detalle-carrito/detalle-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavegacionComponent,
    CatalogoComponent,
    DetalleComponent,
    VerProductoComponent,
    CarritoComponent,
    DetalleCarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2RoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
