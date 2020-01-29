import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Producto } from '../Producto';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos : Producto[];
  buscar : string;

  constructor(private data : DataService) { }

  ngOnInit() {
    this.buscar = '';
    this.data.getProductos()
      .subscribe(
        (data) => this.productos = data
      ) 
  }

  onAddCarrito(nombre, cantidad, imagen){
    let precio = this.getPrecioProducto(nombre) * cantidad;
    let pedido = { nombre: nombre, cantidad: cantidad, imagen: imagen, precio: precio };
    this.data.addCarrito(pedido);
  }

  getPrecioProducto(nombre){
    for(let item of this.productos){
      if(item.nombre == nombre){
        return item.precio;
      }
    }
  }

  resta(unidades, cantidad){
    return unidades - cantidad;
  }

}
