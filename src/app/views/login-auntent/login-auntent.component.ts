import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import {ActivatedRoute} from '@angular/router'
import {pais} from '../../models/prueba-pais'
@Component({
  selector: 'app-login-auntent',
  templateUrl: './login-auntent.component.html',
  styleUrls: ['./login-auntent.component.css']
})
export class LoginAuntentComponent implements OnInit {

 
  constructor(public ser:ApiService,private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.ruta.paramMap.subscribe(res=>{
      const correo=res.get("correo")
      this.ser.get_countrys(correo).subscribe(
        res=>{
          console.log(res);
          this.ser.paisess=res;
        }
      );
    })

  }
 public open(valor,valoru) {
valoru=valoru-1
    if(valor==valoru){
    
    console.log('Correcto '+valor);
    }else{
      
      console.log('Incorrecto '+valor);
}
  }

}
