/* HashTable */
import LinkedList from './util/LinkedList.js';
import HashTable from './util/HashTable.js';
import BinarySearch from './util/BinarySearch.js';
import BinarySearchTree from './util/BinarySearchTree.js';
import Queue from './util/Queue.js';
import PriorityQueue from './util/PriorityQueue.js';
import Stack from './util/Stack.js';
import QuickSort from './util/QuickSort.js';
import MergeSort from './util/MergeSort.js';
import BubbleSort from './util/BubbleSort.js';
import SelectionSort from './util/SelectionSort.js';
import RadixSort from './util/RadixSort.js';


window.onload = () => {
    console.log('Linked List');    
    const list = new LinkedList(); 
      list.append(1);    
      list.append(2); 
      list.append(2);   
      list.append(3);
      list.append(0);
      list.prepend(0);
      list.prepend(0);  
      console.log(list);
      list.removeDups();
      console.log(list);

    console.log('HashTable');
    const ht = new HashTable(); 
      console.log(ht);
      ht.add('beau', 'person');
      ht.add('fido', 'dog');
      ht.add('rex', 'dinosour');
      ht.add('tux', 'penguin');
      ht.add('testObj', {'testkey':'testvale'});
      ht.add('somestring');
      console.log(ht.lookup('somestring'));
      console.log(ht.lookup('testObj'));
      ht.print();

    console.log('BinarySearchTree');
    const bst = new BinarySearchTree();
      bst.add(9);
      bst.add(4);
      bst.add(17);
      bst.add(3);
      bst.add(6);
      bst.add(22);
      bst.add(5);
      bst.add(7);
      bst.add(20);

      console.log(bst.findMinHeight());
      console.log(bst.findMaxHeight());
      console.log(bst.isBalanced());
      bst.add(10);
      console.log(bst.isBalanced());
      console.log('inOrder: ' + bst.inOrder());
      console.log('preOrder: ' + bst.preOrder());
      console.log('postOrder: ' + bst.postOrder());
      console.log('levelOrder: ' + bst.levelOrder());

    console.log('Queue');
    const q = new Queue(); 
      q.enqueue('a'); 
      q.enqueue('b');
      q.enqueue('c');
      q.print();
      q.dequeue();
      console.log(q.front());
      q.print();

    console.log('PriorityQueue');
    const pq = new PriorityQueue(); 
      pq.enqueue(['Beau Carnes', 2]); 
      pq.enqueue(['Quincy Larson', 3]);
      pq.enqueue(['Ewa Mitulska-Wójcik', 1])
      pq.enqueue(['Briana Swift', 2])
      pq.printCollection();
      pq.dequeue();
      console.log(pq.front());
      pq.printCollection();

    console.log('Stack');
    const myStack = new Stack();
      myStack.push(1);
      myStack.push(2);
      console.log(myStack.peek());
      console.log(myStack.pop());
      console.log(myStack.peek());
      console.log(myStack.size());


    const qs = new QuickSort();
      console.log('QuickSort', qs.quickSort([9,5,8,6,7,3,4,96,1,8,3,3,5,4,85,5,5]));

    const ms = new MergeSort();
      let sortedArray1 = ms.mergeSort([9,5,8,6,7,3,4,96,1,8,3,3,5,4,85,5,5]);
      let sortedArray2 = ms.mergeSort(['harry', 'bob', 'andy', 'liz', 'larry', 'alex']);
      console.log('MergeSort:', sortedArray1, sortedArray2);

    const bs = new BubbleSort();
      console.log('BubbleSort', bs.bubbleSort([9,5,8,6,7,3,4,96,1,8,3,3,5,4,85,5,5]));

    const ss = new SelectionSort();
      console.log('SelectionSort', ss.selectionSort([9,5,8,6,7,3,4,96,1,8,3,3,5,4,85,5,5]));

    const rs = new RadixSort();
      console.log('RadixSort', rs.radixSort([9,5,8,6,7,3,4,96,1,8,3,3,5,4,85,5,5]));

    console.log('BinarySearch');
    const search = new BinarySearch();
      let target = 'andy';
      console.log('Looking for...', target);
      let result = search.binarySearch(sortedArray2, target);
      console.log('Result: ', result);

};