import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.css']
})
export class InterfacesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
}
interface Person{
  name: string;
}

interface Employee extends Person{
  salary: number;
  age?: number; // adicionado atributo age como opcional
}

let pe: Person = {name: "Luna"};
let emp: Employee = {name: "JuJu", salary: 5000};

function printName(person: Person): void {
  console.log(person.name);
}

printName(pe);
printName(emp);
