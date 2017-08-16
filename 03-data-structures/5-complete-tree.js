
// an incomplete node has 1 child. 0 or 2 children is compelte
// complete trees will: 
//		- have at most 1 incomplete node.
// 		- fill breadth-first from left to right


class CTnode {
	constructor(_value) {
		this.value = _value;
		this.rightChild = null;
		this.leftChild = null;
		this.complete = true;
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
	getComplete() {
		return this.complete;
	}
	toggleComplete() {
		!this.complete
	}
};

// each parent can only have two children
class CT {
	constructor() {
		this.topNode = null;
	}
	addNode(_newValue) {
		// place this node where it belongs
		// this will require 
		// 		- finding the depth of the left-most leaf
		//		- a depth first search to find the first node with only one child
		// 		- a recursive search to find the first incomplete leaf, if there is one
	}
	removeNode(_value) {
		// remove the first node with value = _value
		// be sure to reset children !!
	}
	findValue(value, search_type) {
		// search the tree for that value using the indiated search type
		return node
	}
	depthFirst(_value) {
		// depth-first recursive search of the tree for that value
	}
	breadthFirst(_value) {
		// breadth-first recursive search for _value
	}
	// any helper methods?
};