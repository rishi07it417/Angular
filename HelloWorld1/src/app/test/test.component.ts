import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ArgumentOutOfRangeError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  styles:[
    '.cstyle{      color : orange;    }'
  ]
})
export class TestComponent implements OnInit {
  public name = "Rishi";
  public inputValue:string;
  public isDisabled = false;
  public myc = "cstyle";
  public myClr = "Violet";
  @Input() public testProp : string;
  @Output() public childEvent = new EventEmitter();

  public fireChildEvent(myinput):void{
    this.childEvent.emit(myinput.value);
  }

  public  myStyle = {
    color : 'red',
    fontStyle : 'bold'
  };
  public clrsArr=['Red','Yellow','Green','Blue'];

  constructor() {
   }

  ngOnInit(): void {
  }

  public greetAddedName(): string{
    return "Hello, welcome sir/mam:"+this.name;
  }

  public onClick(input):void{
    console.log("INside . onc lco");
    console.log(input.value);
    if(this.isDisabled){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
  }

}
