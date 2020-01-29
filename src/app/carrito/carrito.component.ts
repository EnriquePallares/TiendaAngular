import { Component, OnInit } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { DetalleCarritoComponent } from '../detalle-carrito/detalle-carrito.component';

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
