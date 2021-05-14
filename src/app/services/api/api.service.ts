import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {usuario} from '../../models/user';
import {mail} from '../../models/validadEmail';
// ****
import {pais} from '../../models/prueba-pais'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_API = 'http://localhost:3000/API';
  paisess:pais[];

  constructor(private http: HttpClient) { }

  addUser(user){
    console.log('va al servidor');
    console.log(user);
    return this.http.post(this.URL_API+'/registrar',user);
  }
  verCorreoRecuperar(email:String){
    return this.http.get<mail>(this.URL_API+'/recuperar/'+email);
  }
  check_email_user(email:String){
    return this.http.get<mail>(this.URL_API+'/verifica_correo/'+email);
  }

  // trae los pasises mesclasdos
  get_countrys(email:String){
    return this.http.get<pais[]>(this.URL_API+'/consultaCodigo/'+email);
  }

  vaildaUserAuten(correo:String){

  }

} 
