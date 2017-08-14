// last in first out, first in last out

var stack = {
	data: [],
	push: function(newValue) {
		this.data.push(newValue);
	},
	pop: function() {
		return this.data.pop();
	}
}

// rewrite this using a class instead of an object literal