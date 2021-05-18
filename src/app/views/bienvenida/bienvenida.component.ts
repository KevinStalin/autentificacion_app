import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(private ruta:Router,private cookie:CookieService) { }

  ngOnInit(): void {
  }


  redirige(){
    // this.cookie= "nombre=; max-age=0";
    document.cookie="access=; max-age=0";
    this.ruta.navigate(['/','login'])
  }
}
