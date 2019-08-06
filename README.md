# CS Core Concepts
CS core concepts implimtated in javascript.

# Linked List

A Linked Lists is a series of nodes where one node is linked directly to the nextnode and so on. In this example I have set up a doubly linked list. In the is case the node are linked to both the next node and the previous node.
In both cases for singly linked list and doubly linked list the BigO is O(n). Since the BigO for both singly and doubly linked list are O(n) it’s worth setting up a doubly linked list as it give you the extra option of linking back to the previous node.

The difference between a Linked List and an Array is that an array is index while a linked list is not. 


Advantages: Insert and Delete can be really quick.

Disadvantage:  Getting to the nth node is slow.

The BigO of a Linked list is O(n)
 
# Hash Tables

Hash tables are used to `implement associative arrays, or mapping of key-values pairs`.  

Hash Functions: Hash tables are implemented by taking a key value and running it through a hash function.  A hash function maps string to numbers which will then correspond to indexes in an array.  The same process is used for both storing and retrieving the key-value.

Collisions:  In the case where two or more key values are mapped to the number/same index, this is called a collision.  The most common way to deal with collisions is called `Chaining`.  This is where you just store all of the key-values in a Linked List or Array on that same index.  Then you can just scan through each enter and find the key value you are looking for.   
  
The BigO for a hash table is `O(n)` in the worst case scenario and `O(1)` in the average case. 

# Stacks
 
A `Stacks are a linear data structure` where nodes are added in a `LIFO - Last In First Out` order.  

The BigO for a stack is `O(n)`.

# Queues
 
A `Queues are a linear data structure` where nodes are added in a `FIFO - First In First Out` order. 
 
The BigO for a stack is `O(n)`.
 
#Binary Search Tree

A Binary Search Tree data structure is one that very much would look like a tree in nature.  It starts with a root element.  As additional nodes are added, if the node is less than the parent node it would be added to the left side of the parent.  If it is greater than the parent then it would be added to the left side of the parent.  Each node will only have two child nodes.
      		 
 ![Screen Shot 2019-07-14 at 1 10 01 PM](https://user-images.githubusercontent.com/11912649/61187573-b796bf00-a638-11e9-879e-ffb8dc203361.png)                     
 
This allows use to efficiently scan through the tree to find a particular node. In each check can roughly eliminating about half the remaining nodes until we find the node we are looking for.  
 
The BigO for a binary search tree O(log n) on average and is `O(n)` in the worst case scenario.
Bubble Sort
Bubble sort is not a very efficient sorting algorithm that you would not want to use in a real world situation. 

It basically just scans through the array and every time it sees to elements out of order it will just swap them.  If you scan through the array enough times you will eventually have a sorted array. 

The BigO for a bubble sort is `O(n^2)`

# SelectionSort

The Selection sort algorithm divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. 

The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging it with the next smallest element in the unsorted element.
 
The BigO for a selection sort is `O(n^2)`
 
# QuickSort

Popular and efficient sorting algorithm.  

The way it works is you pick a pivot element usually in the center of the array.  Then you scan through array from both the left and the right side of the pivot.  As you scan you will swap element if they are out of order, meaning elements less than you pivot element value should come before elements greater than you pivot element value.  This will lead to a sub-set of values `less than` and `greater than` the pivot element value.  
 
Next you will continue to run each `less than` and `greater than` sub-set through the quick sort.  Continuing this process will result in a sorted array. 

![Screen Shot 2019-07-14 at 5 49 52 PM](https://user-images.githubusercontent.com/11912649/61194484-4d593b00-a687-11e9-9508-45020a15acc1.png)

The BigO for a quick sort is `O(n log n)` on average and `O(n^2)` in the worst case scenario.  Worst case scenario would arise if you were to pick your pivot point index at the beginning or end of the array. 
 
# Merge Sort

Popular, consistent, and one of the most efficient sorting algorithms.  It uses the concept of divide and conquer to sort a list of elements

![Screen Shot 2019-07-14 at 2 23 03 PM](https://user-images.githubusercontent.com/11912649/61188331-1e20da80-a643-11e9-9f9e-f76a9766f8f5.png)
 
The way it works is by breaking the array in half and then repeating this process until we get to singe elements. Once we have single elements, then we can start merging and sorting the array back together.   Eventually we will have a sorted array.       
    
The BigO for the Merge Sort is `O(n log n)`

#### Fun Fact:  Mozilla uses merge sort while Chrome’s v8 uses a combination of insertion Sort and Quick Sort.  If the array is less than 10 elements in length, it uses an InsertionSort
 
# RadixSort
A Radix Sort sorts data with integer keys by grouping keys from the individual digits which share the same significant position and value. 

It is is a non-comparison based sorting algorithm where it grouping by the number place and position.

![Screen Shot 2019-07-14 at 5 52 30 PM](https://user-images.githubusercontent.com/11912649/61194445-010dfb00-a687-11e9-8990-a9df7a856c12.png)

 
The BigO for a radix Sort is `O(nk)`
 
# Binary Search

Binary Search is an efficient way to search an already sorted array. 

It will first check the middle element of the array for the search value.  
If finds a match it will return the value. 
If middle element value is greater than the search value, then it will check the middle of the lower half of the array.  
If the middle element is less than the search value, then it will check the middle of the upper half of the array.
The binary search algorithm will continue this process until the value is either found or not found. 

This is a pretty efficient method for searching a sorted array as with each check you are eliminating half of the possible elements. 

The BigO for binary search is` O(log n)`




### Images sourced from:

https://www.youtube.com/watch?v=5cU1ILGy6dM

https://medium.com/employbl/depth-first-and-breadth-first-search-on-trees-in-javascript-58dcd6ff8de1

https://tchol.org/explore/transparent-structures-of-the-eye.html

https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060

https://qnaplus.com/implement-quick-sort-c/

https://www.ritambhara.in/radix-sort/
