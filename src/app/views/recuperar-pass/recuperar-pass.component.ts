import { AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import {MyValidations} from '../../utils/my-validations';
@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.component.html',
  styleUrls: ['./recuperar-pass.component.css']
})
export class RecuperarPassComponent implements OnInit {
  public formLogup: FormGroup;
  constructor(private formBuilder: FormBuilder, private server: ApiService) { }

  ngOnInit(): void {
    this.formLogup = this.formBuilder.group({
 
        email: ['', [Validators.required, Validators.email]]

      });
  }
  get_data() {
    console.log('Valores FormLogup');
    console.log(this.formLogup.value);
    console.log(this.formLogup.get('email').value);
   this.server.verCorreoRecuperar(this.formLogup.get('email').value).subscribe(res=>console.log("ressss",res));
   

  }

}