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
console.log(" ----- START - INTERFACES ------");
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

// Intersecao de tipos, combinando propriedades de ambas interfaces
interface Employees {
  employeeId: number;
  name: string;
  age: number;
}

interface Manager {
  stockPlan: boolean;
}

type ManagerEmployees = Employees & Manager;
let em1: ManagerEmployees;
em1 = {
  employeeId: 1,
  name: 'Luna',
  age: 35,
  stockPlan: true,
}

console.log('Result: ' +em1.name+ " " +em1.age);

console.log(" ----- END - INTERFACES ------");
