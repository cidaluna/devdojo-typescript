import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    

   }

}
console.log(" ----- START - FUNCTIONS ------");
function printValues(val: string) {
    console.log(val);
}
printValues("Message here!");

function printOrNot(flag: boolean) {
    let str = flag ? "flag is true" : "flag is false";
    console.log(str);
}
printOrNot(false);

// Anonymous Function
let sumAnonymous = function(n1: number, n2:number): void {
    console.log(`sum: ${n1 + n2}`);
};
sumAnonymous(3,2);

// Arrow Functions
let sumArrow1 = (n1: number, n2: number) => n1 + n2;
let sumArrow2 = (n1: number, n2: number) => { return n1 + n2};
let objectArrow = (name: string, surname: string) => ({name: name, surname: surname});
console.log(sumArrow1(5,2));
console.log(sumArrow2(5,5));
console.log(objectArrow("Cida", "Luna"));

// Object
let lottery = {
    names: ["Joao", "Lucas", "Marcos"],
    test: "lalala",
    createLoterryPicker: function(){
        console.log("First level this: " +this.names+ " " +this.test);
        return () => {  
            console.log("Second level this: " +this); // the this below refers this above
            let pickedPersonNumber = Math.floor(Math.random() * 3);
            return { name: this.names[pickedPersonNumber]}
        }
    }
};

let personPicker = lottery.createLoterryPicker();
let pickedPerson = personPicker();
console.log(pickedPerson);

// Anonymous Function
let addNumbers1 = function (x: number, y: number): number {
    return x + y;
}
console.log('Result Anonymous Function: ' +addNumbers1(2,2));

// Arrow Function
let addNumbers2 = (x: number, y: number): number => x + y;
console.log('Result Arrow Function: ' +addNumbers2(2,2));

console.log(" ----- END - FUNCTIONS ------");
