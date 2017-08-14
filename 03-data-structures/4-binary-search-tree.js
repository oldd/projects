class BTnode {
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
}

// each parent can only have two children
class BT {
	constructor() {
		this.topNode = null;
	}
	createNode(_newValue) {
		// place this node where it belongs
		// greater values go left, lesser to the right
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
}

