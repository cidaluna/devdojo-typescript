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

// Another Function with optional parameters
function addNumbers2(x: number, y?: number): number {
    if(y === undefined){
        return x;
    }else{
        return x + y;
    }
}
console.log('Result Function: ' +addNumbers2(55, 3));
console.log('Resul Function with no parameter y: ' +addNumbers2(5));

// Function with default parameter
function addNumbers4 (x: number, y = 25):number{
    return x + y;
}
console.log('Resul Function with default parameter y: ' +addNumbers4(11));

// Rest parameters
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number = firstNumber;
    for(let counter = 0; counter <restOfNumbers.length; counter++){
        if(isNaN(restOfNumbers[counter])){
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
}
console.log('Resul Function with no rest parameter: ' +addAllNumbers(1));
console.log('Resul Function with rest parameter: ' +addAllNumbers(1,2,3,4,5,6,7));
console.log('Resul Function with rest parameter: ' +addAllNumbers(1,2,3));

// Arrow Function
let total = (input: number[]): number => {
    let total: number = 0;
    for(let i = 0; i<= input.length; i++){
        if(isNaN(input[i])){
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log('Result Arrow Function: ' +total([1,2,3]));

// Arrow Function
let addNumbers3 = (x: number, y: number): number => x + y;
console.log('Result Arrow Function: ' +addNumbers3(2,2));

// Function with destructured object parameters 
interface Message{
    text: string;
    sender: string;
}

function displayMessage({text, sender}: Message){
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({sender: 'Cida', text:'my Typescript code'});


console.log(" ----- END - FUNCTIONS ------");
