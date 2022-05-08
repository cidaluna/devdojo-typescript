import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generics',
  templateUrl: './generics.component.html',
  styleUrls: ['./generics.component.css']
})
export class GenericsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    

   }

}

// Generic Function
function reverseList<T>(list: Array<T>): Array<T> {
    let theReversedList: T[] = [];
    for(let i = list.length - 1; i >= 0; i--) {
        theReversedList.push(list[i]);
    }
    return theReversedList;
}

let names = ["Amanda", "Barbara", "Cida", "Daiany"];
let numbers = [1,2,3,4,5];
let reversedListNames = reverseList(names);
let reversedListNumbers = reverseList(numbers);

console.log(reversedListNames);
console.log(reversedListNumbers);
