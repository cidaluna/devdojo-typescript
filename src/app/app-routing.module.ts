import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TiposvariaveisComponent } from './tiposvariaveis/tiposvariaveis.component';

const routes: Routes = [
  //{ path: ' ', component: TiposvariaveisComponent },
  { path: 'variables', component: TiposvariaveisComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
