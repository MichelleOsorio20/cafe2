import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ProductoInterface } from '../models/producto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private data: DataService) { }
  public productos = [];
  public producto = '';

  ngOnInit() {
    this.getListProductos();
  }

  getListProductos(){
    this.data.getAllProdutos().subscribe( productos => {
        this.productos = productos;
    });
  }

  onDeleteProducto(){
      console.log('DELETE PRODUCTO');
  }

}