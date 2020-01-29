import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Producto } from '../Producto';

@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  nombreProducto : string;
  productoSeleccionado : Producto = {nombre: '', precio: 0, imagen: '', unidades_disponibles: 0};

  constructor(private route : ActivatedRoute, private data : DataService) { }

  ngOnInit() {
    this.nombreProducto = this.route.snapshot.params['nombre'];
    this.data.getProductos()
      .subscribe(
        (data) => {
          for(let item of data){
            if(item.nombre == this.nombreProducto){
              this.productoSeleccionado = item;
            }
          }
        }
      )
  }

}
