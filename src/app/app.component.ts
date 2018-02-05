import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // models for inputs 
  addition1:string;
  addition2:string;
  AdditionResult:string;

  subtract1:string;
  subtract2:string;
  subtractResult:string;

  multiply1:string;
  multiply2:string;
  MultiplyResult:string;

  divide1:string;
  divide2:string;
  DivideResult:string;
  constructor() {
  }

  clearAll() {
    // Clear addition models.
    this.addition1      = "";
    this.addition2      = "";
    this.AdditionResult = "";

    // Clear subtraction models.
    this.subtract1      = "";
    this.subtract2      = "";
    this.subtractResult = "";

    // Clear multiplication models.
    this.multiply1      = "";
    this.multiply2      = "";
    this.MultiplyResult = "";
    
    //clear division models
    this.divide1      = "";
    this.divide2      = "";
    this.DivideResult = "";
  }

  

  getOutputString(op1, op2, operator, result) {
    let resultStr = op1.toString() + " " + operator + " " 
                  + op2.toString() + " = " + result.toString();
    return resultStr;
  }

  // Perform addition.
  doAddition() {
    // Store inputs in locally declared variables.
    let operand1 = Number(this.addition1);
    let operand2 = Number(this.addition2);

    // Clear all inputs and outputs.
    this.clearAll();

    // Perform addition.
    let result = operand1 + operand2;

    // Generate output.
    this.AdditionResult = this.getOutputString(operand1, operand2, "+", result)
  }
  // Perform subtraction.
  doSubtraction() {
    // Store inputs in locally declared variables.
    let operand1 = Number(this.subtract1);
    let operand2 = Number(this.subtract2);

    // Clear all inputs and outputs.
    this.clearAll();

    // Perform subtraction.
    let result = operand1 - operand2;

    // Generate output.
    this.subtractResult = this.getOutputString(operand1, operand2, "-", result)
  }
   // Perform multiplication.
   doMultiplication() {
    // Store inputs in locally declared variables.
    let operand1 = Number(this.multiply1);
    let operand2 = Number(this.multiply2);

    // Clear all inputs and outputs.
    this.clearAll();

    // Perform subtraction.
    let result = operand1 * operand2;

    // Generate output.
    this.MultiplyResult = this.getOutputString(operand1, operand2, "*", result)
  }

  doDivision() {
    // Store inputs in locally declared variables.
    let operand1 = Number(this.divide1);
    let operand2 = Number(this.divide2);

    // Clear all inputs and outputs.
    this.clearAll();

    // Perform subtraction.
    let result = operand1 / operand2;

    // Generate output.
    this.DivideResult = this.getOutputString(operand1, operand2, "/", result)
  }

}
