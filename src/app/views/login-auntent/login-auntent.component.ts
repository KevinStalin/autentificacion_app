import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

import {pais} from '../../models/prueba-pais'
@Component({
  selector: 'app-login-auntent',
  templateUrl: './login-auntent.component.html',
  styleUrls: ['./login-auntent.component.css']
})
export class LoginAuntentComponent implements OnInit {

 
  constructor(private ser:ApiService) { }

  ngOnInit(): void {
    this.ser.get_countrys('danigarck@hotmail.com').subscribe(
      res=>{
        console.log(res);
        this.ser.paisess=res;
      }
    );

  }

}
