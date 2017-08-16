// [first node] -> [node] -> [node] -> ... -> null

class ListNode {
	constructor(_value) {
		this.next = null;
		this.value = _value;
	},
	getNext() {
		return this.next;
	},
	setNext(nextNode) {
		this.next = nextNode;
	},
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
	// a helper method, meaning it's only called within the class
	findNext(currentNode) {
		// logic
		return nextNode;
	},
	findValue(value) {
		// find the node with that value, or say it doesn't exist
		return node;
	}
};

// 1:  extend LinkedList to create a stack

// 2:  extend LinkedList to create a queue