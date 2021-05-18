import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-logup-autent',
  templateUrl: './logup-autent.component.html',
  styleUrls: ['./logup-autent.component.css']
})
export class LogupAutentComponent implements OnInit {

  constructor(private ruta:ActivatedRoute,private API:ApiService) { }

  correo="";
  ngOnInit(): void {
    this.ruta.paramMap.subscribe(
      res=>{
      this.correo=res.get('correo');
      }
    );
  }

  manadarDatos(region){
    let data={
      email:this.correo,
      region:region
    }
    console.log(data);
    this.API.add_reg_user(data).subscribe(res=>console.log(res))
  }
}
