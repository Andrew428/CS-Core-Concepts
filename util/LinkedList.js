/* Doubly Linked List */

export default class LinkedList {
  
    constructor () {
        this.head = this.tail = null;
        this.length = 0;
    }
    // add to the end of the list / tail
  append(value) {
    // if list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value)
    }
    // if linkedlist has >= one node
    else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.prev = oldTail
    }
    this.length++;
  }

  //add to beginning of list / head
  prepend(value) {
    // if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value)
    }
    // if linkedlist has >= one node
    else {
      let oldHead = this.head
      this.head = new Node(value)
      oldHead.prev = this.head
      this.head.next = oldHead
    }
    this.length++;
  }

  deleteHead() {
    // if list is empty (no head)
    if (!this.head) {
      return null
    }
    // if linkedlist has >= 1 node
    else {
      let removedHead = this.head
      // if list has only 1 node left
      if (this.head === this.tail) {
        this.head = this.tail = null
      }
      //if list has >1 node
      else {
        this.head = this.head.next
        this.head.prev = null
      }
      this.length--;
      return removedHead.value
    }
  }

  deleteTail() {
    // if list is empty (no tail)
    if (!this.tail) {
      return null
    }
    // if linkedlist has >= one node
    else {
      let removedTail = this.tail
      // if list has only 1 node left
      if (this.head === this.tail) {
        this.tail = this.head = null
      }
      //if list has >1 node
      else {
        this.tail = this.tail.prev
        this.tail.next = null
      }
      this.length--;
      return removedTail.value
    }
  }

  deleteValue(value) {
    console.log(value)
    if (!this.head) {
      return null;
    }
    
    let searchNode = this.head
    while (searchNode) {      
      if (searchNode.value === value) { 
        let removedValue = searchNode;
        console.log(removedValue);
        if(searchNode.prev){
          searchNode.prev.next = searchNode.next;
        }else{
          this.head = searchNode.next;
        }
        if(searchNode.next){
          searchNode.next.prev = searchNode.prev;
        }else {
          this.tail = searchNode.prev;
        }
        this.length--;        
        return removedValue.value;
      }
      searchNode = searchNode.next
    }
        
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null
  }
  
  removeDups(){
    if (!this.head || !this.head.next) {
      console.log('No duplicates were found. Empty or a single element Linked List.');
      return;
    }

    let n1, n2;
    let nodes = {};

    n1 = this.head;
    n2 = n1.next;
    // collect inital values of node
    nodes[n1.value] = true;

    while (n2) {
        let value = n2.value;
        // if value if node is already in the collection then its a dup and need to be removed        
        if (nodes[value]) {
            n1.next = n2.next;
            this.length--;
        }
        // collect value of nodes
        else {          
            nodes[value] = true;
            n1 = n2;
        }
        n2 = n2.next;
    }
  }    
}

class Node {
    constructor (value, prev, next) {
        this.value = value
        this.next = next || null
        this.prev = prev || null
    } 
}


