# LINKED LIST
___
![](http://xenomachina.com/images/linked-list.png)
___
### Starter Code: 
```javascript
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