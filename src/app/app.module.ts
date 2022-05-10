import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing';

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
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
