/* Leetcode -   20
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false
*/

function Stack() {
    this.storage = {};
    this.count = 0;
}
Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
}
Stack.prototype.pop = function() {
    if(this.count === 0) {
        return null;
    }
    this.count--;
    let item = this.storage[this.count];
    delete this.storage[this.count];
    return item;
}
Stack.prototype.peek = function() {
    if(this.count === 0) {
        return null;
    }
    let item = this.storage[this.count-1];
    return item;
}
Stack.prototype.size = function() {
    return this.count;
}

function validateParanthese(param) {
    let storageOfParanthese = new Stack();
    let paranthese = param.split("");
    if (paranthese.length === 0) {
        console.log(true);
    } else {
        for (let i=0; i < paranthese.length; i++) {
            if (paranthese[i] === '(' || paranthese[i] === '{' || paranthese[i] === '[') {
                storageOfParanthese.push(paranthese[i]);
            } else if (paranthese[i] === ')' && storageOfParanthese.pop() != '(' ||
                        paranthese[i] === '}' && storageOfParanthese.pop() != '{' ||
                        paranthese[i] === ']' && storageOfParanthese.pop() != '[') {
                        console.log(false);
                }   
            }
        console.log(storageOfParanthese.size() === 0);
    }  
}
validateParanthese('([)');