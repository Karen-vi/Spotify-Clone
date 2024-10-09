import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], //Se pueden declarar componentes directivas y pipes
  imports: [BrowserModule, AppRoutingModule], //Solo se importan otros módulos
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
