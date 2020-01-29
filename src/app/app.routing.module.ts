import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'inicio/ver-producto/:nombre', component: VerProductoComponent },
    { path: 'carrito', component: CarritoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Angular2RoutingModule { }
