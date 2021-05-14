import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import {Router} from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import {MyValidations} from '../../utils/my-validations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  constructor(private formBuilder: FormBuilder, private server: ApiService,private ruta:Router) { }

  ngOnInit(): void {
    this.formLogin=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  
  get_data() {
    console.log('Valores Login');
    console.log(this.formLogin.get('email').value);
    this.server.get_login(this.formLogin.value).subscribe(
      res=>{
        console.log(res);
        if(res.ok){
          this.ruta.navigate(['/login-autent',this.formLogin.get('email').value])
        }
  
      }
    );
  }

}
