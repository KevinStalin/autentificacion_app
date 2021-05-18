import { AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import {Router} from '@angular/router'
import { MyValidations } from '../../utils/my-validations';
@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.component.html',
  styleUrls: ['./recuperar-pass.component.css']
})
export class RecuperarPassComponent implements OnInit {
  public formLogup: FormGroup;
  constructor(private formBuilder: FormBuilder, private server: ApiService,private ruta:Router) { }

  ngOnInit(): void {
    this.formLogup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get_data() {
    console.log('Valores FormLogup');
    console.log(this.formLogup.value);
    this.server.verCorreoRecuperar(this.formLogup.get('email').value).subscribe(res => {
      if(res.ok){
        alert(res.message);
        this.ruta.navigate(['/','login' ]);
      }else{
        alert(res.message);
      }
      
    }

    );
  }

  envialogin(){
    this.ruta.navigate(['/','login' ]);
  }

}