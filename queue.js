
/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.
*** Operations:
myQueue.enqueue(value)
=> count of queue
add value to collection
myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection
myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection
myQueue.count()
=> number of elements in queue
*** Additional Exercises:
Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."
Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?
Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?
*/

let Queue = function() {
    this.limit = this.limit || Infinity;
    this._store = {};
    this._tail = 0;
    this._head = 0;
}
Queue.prototype.enqueue = function(value) {
    if (this.limit<this._tail){
        return "Max capacity already reached. Remove element before adding a new one.";
    }
    this._store[this._tail] = value;
    this._tail++;
}
Queue.prototype.dequeue = function() {
    if(this._tail - this._head === 0) {
        return null;
    }
    let firstNode = this._store[this._head];
    delete this._store[this._head];
    this._head++;
    return firstNode;
}
Queue.prototype.peek = function() {
    return this._store[this._head];
}
Queue.prototype.count = function() {
    return this._tail-this._head;
}
Queue.prototype.contains = function(value) {
for(i=this._head; i<this._tail; i++) {
    (this._store[i] === value) ? true : false;
}
}