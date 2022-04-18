import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TiposvariaveisComponent } from './tiposvariaveis/tiposvariaveis.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { ClassesComponent } from './classes/classes.component';

@NgModule({
  declarations: [
    AppComponent,
    TiposvariaveisComponent,
    InterfacesComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
