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

function printValues(val: string) {
    console.log(val);
}
printValues("Message here!");

function printOrNot(flag: boolean) {
    let str = flag ? "flag is true" : "flag is false";
    console.log(str);
}
printOrNot(false);
