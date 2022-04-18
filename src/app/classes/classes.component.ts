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

class Person{
  name: string;
  constructor(name: string){
    this.name = name;
  }
  print(): void{
    console.log(`name: ${this.name}`);
  }
}

class Employee extends Person{
  salary: number;
  constructor(name: string, salary: number){
    super(name);
    this.salary = salary;
  }
  override print(): void{
    super.print();
    console.log(`salary: ${this.salary}`);
  }
}

let p1 = new Person("Joao");
let p2 = new Employee("Helena", 5000);

p1.print();
p2.print();