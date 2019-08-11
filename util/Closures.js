/* Closures */

export default class Closures {
  constructor() {
  }

  outer() {
    var name = 'Closure value in outerFunction that will be loged from inner function'; // name is a local variable created by init
    var inner = () => { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    inner();
  }  
}
