import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { MyValidations } from '../../utils/my-validations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {

  public formLogup: FormGroup;

  constructor(private formBuilder: FormBuilder, private server: ApiService, private ruta: Router) {
  }

  ngOnInit(): void {
    this.formLogup = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], MyValidations.validaEmail(this.server)],
      cedula: ['' ,[Validators.required, Validators.minLength(10)],MyValidations.validaID(this.server)],
      nombreUsuario: ['', Validators.required,MyValidations.validaNick(this.server)],
      password: ['', [Validators.required, Validators.minLength(4)]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      direccion: ['', Validators.required],
      fecha: ['', [Validators.required]],
      codigoPostal: ['', Validators.required],
      tipoSangre: ['', [Validators.required,]],
      genero: ['', Validators.required],
      celular: ['', Validators.required],
      oficio: ['', Validators.required],
      etnia: ['', Validators.required]
    });
  }

  get_data() {
    // console.log('Valores FormLogup');
    // console.log(this.formLogup.value);
    this.ruta.navigate(['/logup-autent', this.formLogup.get('email').value]);
    this.server.addUser(this.formLogup.value).subscribe(res => {
      if (res.ok) {
        this.ruta.navigate(['/logup-autent', this.formLogup.get('email').value]);
      } else {
        console.log("EN eror");
        console.log("ERORORRO", res);
      }
    });

  }


}
