import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TiposvariaveisComponent } from './tiposvariaveis/tiposvariaveis.component';

@NgModule({
  declarations: [
    AppComponent,
    TiposvariaveisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
