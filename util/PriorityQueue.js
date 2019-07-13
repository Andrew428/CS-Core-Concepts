/* Priority Queue */

export default class PriorityQueue { 
  constructor (collection) {
    this.collection = [];     
  }
  printCollection = function() {
    (console.log(this.collection));
  };
  enqueue = function(element){
      if (this.isEmpty()){ 
          this.collection.push(element);
      } else {
          var added = false;
          for (var i=0; i < this.collection.length; i++){
               if (element[1] < this.collection[i][1]){ //checking priorities
                  this.collection.splice(i,0,element);
                  added = true;
                  break;
              }
          }
          if (!added){
            this.collection.push(element);
          }
      }
  };
  dequeue = function() {
      var value = this.collection.shift();
      return value[0];
  };
  front = function() {
      return this.collection[0];
  };
  size = function() {
      return this.collection.length; 
  };
  isEmpty = function() {
      return (this.collection.length === 0); 
  };
}


