import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-logup-autent',
  templateUrl: './logup-autent.component.html',
  styleUrls: ['./logup-autent.component.css']
})
export class LogupAutentComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private API: ApiService, private ruteo: Router) { }

  correo = "";
  region: Number;
  ngOnInit(): void {
    this.ruta.paramMap.subscribe(
      res => {
        this.correo = res.get('correo');
      }
    );
  }

  manadarDatos(region) {
    this.region = region;
    let R_user = '';
    if (region == 0) {
      R_user = 'America del NORTE'
    }
    if (region == 1) {
      R_user = 'America del SUR'
    }
    if (region == 2) {
      R_user = 'Asia'
    }
    if (region == 3) {
      R_user = 'Europa'
    }
    if (region == 4) {
      R_user = 'Africa'
    }
    if (region == 5) {
      R_user = 'Oceania'
    }
    let data = {
      email: this.correo,
      region: region
    }
    /*
    this.API.add_reg_user(data).subscribe(res => {
      if(res.ok){
        // alert(`Region ${R_user} Seleccionada `);
        // this.ruteo.navigate(['/','login'])
      }else{
        alert(`Error region`);
      }
    })
    */
  }

  seleccionada() {
    return this.region;
  }

  mandaAPP() {
    let data = {
      email: this.correo,
      region: this.region
    }
    console.log(data);
    this.API.add_reg_user(data).subscribe(res => {
      if (res.ok) {
        console.log(res);
        // alert(`Region ${R_user} Seleccionada `);
        this.ruteo.navigate(['/', 'login']);
      } else {
        alert(`Error region`);
      }
    })

  }
}


