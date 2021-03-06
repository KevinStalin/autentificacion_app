import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {usuario} from '../../models/user';
import {mail} from '../../models/validadEmail';
// ****
import {pais} from '../../models/prueba-pais'
import {usuarioBD} from '../../models/registro_usuario'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL_API = 'http://localhost:3000/API';
  URL_API='https://api-calidad.herokuapp.com/API'
  paisess:pais[];

  constructor(private http: HttpClient) { }

  addUser(user){
    return this.http.post<usuarioBD>(this.URL_API+'/registrar',user);
  }
  verCorreoRecuperar(email:String){
    return this.http.get<mail>(this.URL_API+'/recuperar/'+email);
  }
  check_email_user(email:String){
    return this.http.get<mail>(this.URL_API+'/verifica_correo/'+email);
  }
  check_id_user(id:number){
    return this.http.get<mail>(this.URL_API+'/verifica_cedula/'+id);
  }
  check_nick_user(nombre:string){
    return this.http.get<mail>(this.URL_API+'/verifica_nick/'+nombre);
  }

  add_reg_user(autent){
    return this.http.post<mail>(this.URL_API+'/region',autent);
  }

  // trae los pasises mesclasdos
  get_countrys(email:String){
    return this.http.get<pais[]>(this.URL_API+'/consultaCodigo/'+email);
  }
  get_login(user){
     console.log('2222 va al servidor');
    console.log(user);
    return this.http.post<mail>(this.URL_API+'/login',user);
  }
 
  vaildaUserAuten(correo:String){

  }

} 
