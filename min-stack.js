/* Leet code - 155
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack = [];
    this.count = 0;
     this.storage = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
        if (!this.minStack.length || value <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value);
        } 
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    if (result === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.storage[this.count-1];
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack()
obj.push(-2)
 console.log(obj);
 