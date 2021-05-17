import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logup-autent',
  templateUrl: './logup-autent.component.html',
  styleUrls: ['./logup-autent.component.css']
})
export class LogupAutentComponent implements OnInit {

  constructor(private ruta:ActivatedRoute) { }

  correo="";
  ngOnInit(): void {
    this.ruta.paramMap.subscribe(
      res=>{
      this.correo=res.get('correo');
      }
    );
  }

  manadarDatos(region){
    console.log("Correo->",this.correo);
    console.log("region-_>",region);
    let data={
      email:this.correo,
      region:region
    }
    console.log(data);
  }

}
