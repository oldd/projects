// null <- [first node] <-> [node] <-> ... <->  [node] -> null

class ListNode {
	constructor(_value) {
		this.previous = null;
		this.next = null;
		this.value = _value;s
	},
	getNext() {
		return this.next;
	},
	setNext(nextNode) {
		this.next = nextNode;
	},
	getPrevious() {
		return this.next;
	},
	setPrevious(previousNode) {
		this.previous = previousNode;
	},
	getValue() {
		return this.value;
	}
};

class DoublyLinkedList {
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
	// a helper method
	findPrevious(currentNode) {
		// logic
		return previousNode;
	},
	findValue(value) {
		// find the node with that value, or say it doesn't exist
		return node;
	}
};

//challenge 1:  extend DoublyLinkedList to create a stack
//challenge 2:  extend DoublyLinkedList to create a queue