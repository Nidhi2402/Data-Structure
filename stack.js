/*
STACK
Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.
*** Operations:
myStack.push(value)
=> count of stack
add value to collection
myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection
myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection
myStack.count()
=> number of elements in stack
 */

/* Time complexity for push, pop will be O(1) */

 function createStack() {
     this.count = 0;
     this.storage = {};
 }

 createStack.prototype.push = function(value) {
     this.storage[this.count] = value;
     this.count++;
 }

 createStack.prototype.pop = function() {
    if(this.count === 0 ) {
        return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
 }

 createStack.prototype.size = function() {
     return this.count;
 }