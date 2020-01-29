import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  pedidos : any[];

  constructor(private data : DataService) { }

  ngOnInit() {
    this.pedidos = this.data.productosSeleccionados;
  }

}
