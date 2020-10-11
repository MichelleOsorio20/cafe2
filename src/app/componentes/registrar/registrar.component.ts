import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  providers: [AuthService],
})
export class RegistrarComponent implements OnInit {
  registrarForm = new FormGroup({
    nombre: new FormControl(''),
    celular: new FormControl(''),
    direccion: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc:AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onRegistrar() {
    const {email, password} = this.registrarForm.value;
    try{
      const user = await this.authSvc.registrar(email, password);
      if(user){
        //redireccionar
        this.router.navigate(['/index']);
      }
    }
    catch(error){console.log(error)}
  }
}