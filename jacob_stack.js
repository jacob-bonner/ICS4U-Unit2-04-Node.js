// Created By: Jacob Bonner
// Created On: December 2020
// This class creates an integer stack.

class JacobStack {
  // Constructor that defines stack array
  constructor() {
    this.STACK_AS_ARRAY = [];
  }

  // This method adds user input to stack
  pushNumber(inputNumber) {
    this.STACK_AS_ARRAY.push(inputNumber);
  }

  // This method pops the item on top of the stack and returns it
  popNumber() {
    if (this.STACK_AS_ARRAY.length <= 0) {
      throw "ERROR: Null Received";
    } else {
      this.poppedNumber = this.STACK_AS_ARRAY[this.STACK_AS_ARRAY.length - 1];
      this.STACK_AS_ARRAY.length = this.STACK_AS_ARRAY.length - 1;
      return this.poppedNumber;
    }
  }

  // This method pops the item on top of the stack and returns it
  peekNumber() {
    if (this.STACK_AS_ARRAY.length <= 0) {
      throw "ERROR: Null Received";
    } else {
      this.peekedNumber = this.STACK_AS_ARRAY[this.STACK_AS_ARRAY.length - 1];
      return this.peekedNumber;
    }
  }

  // This method clears the stack of all values
  clearStack() {
    if (this.STACK_AS_ARRAY.length <= 0) {
      throw "ERROR: Null Received";
    } else {
      this.STACK_AS_ARRAY.length = this.STACK_AS_ARRAY.length - 
                                   this.STACK_AS_ARRAY.length;
    }
  }

  // This getter tells the user the most recent itteration of the array
  currentStack() {
    let currentValues = "Current ArrayList: ";
    for (let counter = 0; counter <= this.STACK_AS_ARRAY.length - 1;
         counter++) {
      currentValues = currentValues + this.STACK_AS_ARRAY[counter] + ", ";
    }
    return currentValues;
  }
}

// Exporting the class
module.exports = JacobStack;
