/**
 * BINARY SEARCH TREES
 * Abstract data type
 * A binary search tree is a tree with the additional constraints:
 * - each node has only two child nodes (node.left and node.right)
 * - all the values in the left subtree of a node are less than or equal to the value of the node
 * - all the values in the right subtree of a node are greater than the value of the node
 * *** Operations:
 * bsTree.insert(value)
 * => bsTree (return for chaining purposes)
 * Insert value into correct position within tree
 * bsTree.contains(value)
 * => true/false
 * Return true if value is in tree, false if not
 */

 var BST = function(value) {
     this.root = value;
     this.left = null;
     this.right = null;
 }

 BST.prototype.addChild = function(value) {
     let child = new BST(value);
     if(value < this.root) { // Need to check if vlaue is less than the root node
         if(this.left) {this.left.addChild(value)} else {this.left = child;} // yes its small, than need to check do we already have node on left than go recursively
     } else { if(this.right) {this.right.addChild(value)} else {this.right = child;}}
     return this
 }
 BST.prototype.contains = function(value) {
     if(this.root === value) {return true}
     if (value < this.root) {
         if (!this.left) {return false} 
        return this.left.contains(value);
     } else {
         if(!this.right) {return false};
         return this.right.contains(value)
     }
 }
 BST.prototype.traverseInOrder = function(fn) {
     if (!this.left & !this.right) {
         return fn(this);
     }
     if(this.left) {
        this.left.traverseInOrder(fn);
     }
     fn(this);
     if(this.right) {
         this.right.traverseInOrder(fn);
     }
 }

 var bst = new BST(11);
 bst.addChild(7);
 bst.addChild(15);
 bst.addChild(18);
 bst.addChild(14);
 bst.addChild(5);
 console.log(bst);
 console.log(bst.contains(10));