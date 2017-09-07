# LINKED LIST
___
![](http://xenomachina.com/images/linked-list.png)
___
### Starter Code: 
```javascript
function listNode(value) {
	var protectedProperties {
		next: null,
		value: value
	};

	function getNext() {
		return this.next;
	}.bind(protected_values);

	function setNext(nextNode) {
		this.next = nextNode;
	}.bind(protected_values);

	function getValue() {
		return this.value;
	}.bind(protected_values);

	function getValue() {
		return this.value;
	}.bind(protected_values);

	return {
		value,
		next: null,
		getNext,
		setNext,
		getValue,
		setValue
	};
};

// convert this class to a factory
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
```
___
### Assignments:
0. make it work
1. extend LinkedList to create a stack
2.  extend LinkedList to create a queue

___  
### Resources:  
* [linked lists](http://www.thatjsdude.com/interview/linkedList.html)  
* [another linked list](http://js-algorithms.tutorialhorizon.com)  