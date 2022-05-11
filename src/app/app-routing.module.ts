import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TiposvariaveisComponent } from './tiposvariaveis/tiposvariaveis.component';

import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { FunctionsComponent } from './functions/functions.component';
import { GenericsComponent } from './generics/generics.component';
import { InterfacesComponent } from './interfaces/interfaces.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'functions', component: FunctionsComponent },
  { path: 'generics', component: GenericsComponent },
  { path: 'interfaces', component: InterfacesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  // adicionei elemento no exports 
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
