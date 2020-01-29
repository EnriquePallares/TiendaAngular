import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'detalle-carrito',
  templateUrl: './detalle-carrito.component.html',
  styleUrls: ['./detalle-carrito.component.css']
})
export class DetalleCarritoComponent implements OnInit {

  pedidos : any[];

  constructor(private data : DataService, private router : Router) { }

  ngOnInit() {
    this.pedidos = this.data.productosSeleccionados;
  }

  calcularTotal(){
    let total = 0;
    for(let item of this.pedidos){
      total += item.precio
    }
    return total;
  }

  onPagar(){
    this.data.submitPedido()
      .subscribe((data)=>this.router.navigate(['/inicio']))
    
  }

}
