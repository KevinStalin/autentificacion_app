import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginAuntentComponent } from './views/login-auntent/login-auntent.component';
import { LogupAutentComponent } from './views/logup-autent/logup-autent.component';

import { HttpClientModule } from '@angular/common/http';
import { RecuperarPassComponent } from './views/recuperar-pass/recuperar-pass.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    routingComponents,
    LoginAuntentComponent,
    LogupAutentComponent,
    RecuperarPassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
