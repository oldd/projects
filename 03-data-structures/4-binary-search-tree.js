# BINARY SEARCH TREE
New nodes are placed according to value.  
The left child of a node will always have a lesser value.
The right child will always have a greater value.
___
![](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/insertEx.bmp)
___
### Starter Code: 
``` javascript
class BSTnode {
	constructor(_value) {
		this.value = _value;
		this.rightChild = null;
		this.leftChild = null;
	} 
	setRightChild(_Rchild) {
		this.rightChild =  _Rchild;
	}
	setLeftChild(_Lchild) {
		this.leftChild =  _Lchild;
	}
	getRightChild() {
		return  this.rightChild;
	}
	getLeftChild() {
		return this.leftChild;
	}
	setValue(_value) {
		this.value =  _value;
	}
	getValue() {
		return this.value;
	}
};

// each parent can only have two children
class BST {
	constructor() {
		this.topNode = null;
	}
	addNode(_newValue) {
		// place this node where it belongs
		// greater values go right, lesser to the left
	}
	removeNode(_value) {
		// remove the first node with value _value
		// be sure to reset children !!
	}
	findValue(value) {
		// search the tree for that value
		// remember lesser values are to the right, greater to the left
		// try drawing this on paper first
		return node
	}
	// any helper methods?
};
```
___
### Assignments:
0. Make it work.

___ 
### Resources  
* [bst](https://khan4019.github.io/front-end-Interview-Questions/bst.html)