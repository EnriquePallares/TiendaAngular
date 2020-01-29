import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios : any[];
  loginForm : FormGroup;
  match : boolean;

  constructor(private data : DataService, private router : Router) { }

  ngOnInit() {
    this.match = true;
    this.loginForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })
    this.data.getUsuarios()
      .subscribe(
        (data) => this.usuarios = data
      )
    this.data.productosSeleccionados = [];
  }

  onSubmit(){
    this.match = false;
    for(let item of this.usuarios){
      if(item.username == this.loginForm.value.email && item.password == this.loginForm.value.password){
        this.match = true;
        break;
      }
    }
    if(this.match){
      this.router.navigate(['inicio']);
    }
  }

}
