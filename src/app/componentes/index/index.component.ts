import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private data: DataService) { }
  public productos = [];
  public producto = '';

  ngOnInit() {
    this.data.getAllProdutos().subscribe(productos => {
      console.log('PRODUCTOS', productos);
      this.productos = productos;
    })
  }

}
