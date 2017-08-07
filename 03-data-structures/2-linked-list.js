class ListNode {
	constructor(_value) {
		this.next = null;
		this.value = _value;s
	},
	getNext() {
		return this.next;
	},
	setNext(nextNode) {
		this.next = nextNode;
	}
	getValue() {
		return this.value;
	}
};

class LinkedList {
	constructor() {
		this.firstNode = null;
	},
	addNode(_value) {
		var newNode = new ListNode(_value);
		// place this node where it belongs
	},
	removeNode(_value) {
		// remove the node with the value _value
		// be sure not to break your list !!
	},
	findNext(currentNode) {
		// a helper method
		return nextNode;
	}
};

//challenge 1:  extend LinkedList to create a stack
//challenge 2:  extend LinkedList to create a queue