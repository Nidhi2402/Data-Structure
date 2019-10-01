/* 
Create a tree is kind of linked list
But in here Tree can have more than one child. So it will be collection of children means array
*/

function Tree(value) {
    this.root = value;
    this.children = [];
}

Tree.prototype.addChild = function(value) {
    var childNode = new Tree(value);
    this.children.push(childNode);
    return childNode;
}

Tree.prototype.contains = function(value) {
    if(this.root === value) { return true; }
    for (let i=0; i<this.children.length;i++) {
        if(this.children[i].contains(value)) { return true}
    }
    return false
}

var tree = new Tree(1);
var branch1 = tree.addChild(2);
var branch2 = tree.addChild(3);
var branch3 = tree.addChild(4);
branch1.addChild(5);
branch1.addChild(6);
branch3.addChild(7).addChild(8);
console.log(tree.contains(2));
console.log(tree);