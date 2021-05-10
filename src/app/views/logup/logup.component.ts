import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {

  public formLogup:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formLogup=this.formBuilder.group({
      // email:['',[Validators.required,Validators.email]],
      // password:['',Validators.required]
      nombre:['',[Validators.required]],
      apellido:['',Validators.required]
    });
  }

  get_data(){
    console.log(this.formLogup.value);

  }

}
