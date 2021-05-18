import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { LogupComponent } from './views/logup/logup.component';
import { LogupAutentComponent } from './views/logup-autent/logup-autent.component';
import { LoginAuntentComponent } from './views/login-auntent/login-auntent.component';
import { RecuperarPassComponent } from './views/recuperar-pass/recuperar-pass.component';
import { BienvenidaComponent } from './views/bienvenida/bienvenida.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logup',
    component: LogupComponent
  },
  {
    path: 'logup-autent',
    component: LogupAutentComponent
  },
  {
    path: 'login-autent/:correo',
    component: LoginAuntentComponent
  },
{
    path: 'login-recuperar',
    component: RecuperarPassComponent
  },
  {
    path: 'bienvenida',
    component: LoginAuntentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,LogupComponent,LoginAuntentComponent,LogupAutentComponent,RecuperarPassComponent,BienvenidaComponent]