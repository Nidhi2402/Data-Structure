/* 
 Create Node first
 In Linkedlist each and every node is a Object
*/

function Node(value) {
    this.value = value;
    this.next= null;
}

function LinkedList(headValue) {
 this.head = new Node(headValue);
 this.tail = this.head;
}

LinkedList.prototype.addToTail = function(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
}

LinkedList.prototype.remove = function(value) {
    let removingNode = new Node(value);
    let parent = this.head;

    while(this.head.next != null || this.head.next != removingNode) {
        parent = parent.next;
    }
    parent.next = removingNode.next;
}
LinkedList.prototype.insertAfter = function(refValue, value) {
    let addingNode = new Node(value);
    if(this.tail === refValue) {
        this.tail = addingNode
    }
    addingNode.next = refValue.next
    refValue.next = addingNode;
}
LinkedList.prototype.forEach = function(calback) {
    var node = this.head;
    while(node) {
        calback(node.value);
        node = node.next;
    }
}
LinkedList.prototype.removeAfter = function(refNode, value) {
    let node = new Node(value);
    refNode.next = node.next;
}