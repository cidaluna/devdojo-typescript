import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TiposvariaveisComponent } from './tiposvariaveis/tiposvariaveis.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { ClassesComponent } from './classes/classes.component';
import { FunctionsComponent } from './functions/functions.component';
import { GenericsComponent } from './generics/generics.component';




@NgModule({
  declarations: [
    AppComponent,
    TiposvariaveisComponent,
    InterfacesComponent,
    ClassesComponent,
    FunctionsComponent,
    GenericsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
