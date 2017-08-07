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
		var newNode = new TreeNode(_newValue);
		console.log(newNode);
		// place this node where it belongs
	},
	removeNode(_value) {
		// remove the first node with value _value
		// be sure to reset children !!
	}
}

