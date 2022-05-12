import { Component, OnInit } from '@angular/core';

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
  console.log(" ----- START - TYPE VARIABLES ------");
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

// Arrays
/*
var myArray: number[][] = [[1,2,3],[9,4,1]];

for(let i=0; i<=myArray.length;i++){
  for(let j=0; j<=myArray.length;j++){
    console.log(myArray[i][j] + ", ");
  }
}
*/

// Array for..of Loop
let arr = [10,20,50,55];
for(var i of arr){
  console.log(i);
}

// Array for..of Loop
let myStr =  ["Typescript", "Frontend", "DevOps", "GitHub", "Developers", "Brazil"];
for(var x of myStr){
  console.log(x);
}

// Array result in the same line
let arrayABC = ['a','b','c'];
console.log(...arrayABC);

// Add numbers into array
var arrayNumbers: number[] = [];
for(let i = 0; i<= 5; i++){
  arrayNumbers.push(i);
}
console.log(arrayNumbers.join(', '));

// Array prints character
let message = "Hello World";
for(var x of message){
  console.log(...x); // return one character for line
}


// Array using for..in
let newArray = ["Typescript", "Frontend", "DevOps", "GitHub", "Developers", "Brazil"];
for(let i=0; i<newArray.length;i++){
  console.log('Index: '+i+'| Value:'+newArray[i]);  // print values and index
}

// Array
const arrayOfBooleans = [true, false];
console.log(...arrayOfBooleans);

console.log(" ----- END - TYPE VARIABLES ------");
