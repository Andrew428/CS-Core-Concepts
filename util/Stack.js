/* Stacks */

export default class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }    
  // Adds a value onto the end of the stack
  push = function(value) {
      this.storage[this.count] = value;
      this.count++;
  }  
  // Removes and returns the value at the end of the stack
  pop = function() {
      if (this.count === 0) {
          return undefined;
      }
      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
  }  
  size = function() {
      return this.count;
  }  
  // Returns the value at the end of the stack
  peek = function() {
      return this.storage[this.count-1];
  }
}


