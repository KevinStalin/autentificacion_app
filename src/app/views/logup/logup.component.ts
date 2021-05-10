import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {

  public formLogup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogup = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', [Validators.required,Validators.minLength(10)]],
      nombreUsuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      telefono:['',[Validators.required,Validators.minLength(10)]],
      direccion:['',Validators.required],
      fecha:['',[Validators.required]],
      codigoPostal:['',Validators.required],
      tipoSangre: ['', [Validators.required,]],
      genero:['',Validators.required],
      celular:['',Validators.required],
      oficio:['',Validators.required],
      etnia:['',Validators.required]
    });
  }

  get_data() {
    console.log(this.formLogup.value);
  }

}
