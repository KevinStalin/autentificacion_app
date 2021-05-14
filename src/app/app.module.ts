import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { LoginComponent } from './views/login/login.component';
// import { LogupComponent } from './views/logup/logup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { LoginAuntentComponent } from './views/login-auntent/login-auntent.component';
import { LogupAutentComponent } from './views/logup-autent/logup-autent.component';

import { HttpClientModule } from '@angular/common/http';
import { RecuperarPassComponent } from './views/recuperar-pass/recuperar-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // LoginComponent,
    // LogupComponent,
    routingComponents,
    LoginAuntentComponent,
    LogupAutentComponent,
    RecuperarPassComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'campo requerido',
          minlength: ({ requiredLength, actualLength }) =>
            `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
