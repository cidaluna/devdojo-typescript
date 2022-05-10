import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
console.log(" ----- START - CLASSES ------");
class Person{
  private _name: string;
  constructor(name: string){
    this._name = name;
  }
  print(): void{
    console.log(`name: ${this._name}`);
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

}

class Employee extends Person {
  private _salary: number;
  constructor(name: string, salary: number){
    super(name);
    this._salary = salary;
  }
  override print(): void {
    super.print();
    console.log(`salary: ${this._salary}`);
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

}

let p1 = new Person("Joao");
let emp1 = new Employee("Helena", 5000);

p1.print();
emp1.print();
console.log(`Her name is ${emp1.name}`);

let p2: Person = new Employee("Lucy", 10000);
p2.print();

console.log(" ----- END - CLASSES ------");
