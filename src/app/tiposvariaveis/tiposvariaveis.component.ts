import { Component, OnInit, ɵɵpipeBind3 } from '@angular/core';

@Component({
  selector: 'app-tiposvariaveis',
  templateUrl: './tiposvariaveis.component.html',
  styleUrls: ['./tiposvariaveis.component.css']
})
export class TiposvariaveisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
  console.log(" ----- TIPOS DE VARIAVEIS ------");
  let num: number = 10;
  let bool: boolean = true;
  let str: string = "A beautiful message";
  let str2: string = 'Teste string 2';
  let str3: string = `${str2} in string 3`;

  console.log('The number is ' +num);
  console.log("The boolean value is " +bool);
  console.log('The string is ' +str);
  console.log('This is the string 2 ' +str2);
  console.log('Just another string ' +str3);

  enum Day{MONDAY = 'Monday', TUESDAY = 'Tuesday', WEDNESDAY = 'Wednesday'}
  let teste: Day = Day.MONDAY;
  console.log(`Today is ${teste}`);

  let today = new Date();
  console.log(`Today is ${today.getDate()} and the day of the week is ${today.toLocaleString('pt-BR', {weekday: 'long'})}`);
  console.log(`Complete date: ${today}`);
  
// o v3? significa que o valor pode ou não ser enviado para a função add
function add(v1: number, v2: number, v3?:number): number {
  if(v3 !== undefined)
    return v1 + v2 + v3;
  return v1 + v2;
}

function hello(){
  return 'Hello Luna!';
}

console.log(add(5,2,3));
console.log(hello());
