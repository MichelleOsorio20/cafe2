import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ProductoInterface } from '../models/producto';
import { NgForm }from '@angular/forms';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public data: DataService) { }
 

  ngOnInit() {
  }

  onSaveProducto(productoForm: NgForm): void{
    this.data.addProducto(productoForm.value);
  }

  

}