// let's focus on the model again
// CRUD:
// 		create, read, update, delete
// these are the principle operations with all databases
// we only need read and update for this project
// 
// let's also 'purify' the model, no more dom accessing
//  -- make this change throughout the rest of the steps

var model = {
	// model stuff.  
	// stores and modifies the data
	playerState: true,
	boardState: [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
	updateData: function(box, row, column) {
		if(this.boardState[row][column] == null) {	
			if(this.playerState) {
				this.boardState[row][column] = 'x';
			} else {
				this.boardState[row][column] = 'o';
			}
			this.playerState = !this.playerState;
		} else {
			alert('grow up. you can\'t do that')
		};
	},
	readBoardState: function() {
		return this.boardState;
	},
	readPlayerState: function() {
		return this.playerState;
	}
};

// view writes to dom (mostly)
var view = {
	// view stuff
	// is passed data and makes it visible to the user
	populateBoard: function(boardNow) {
		var board = document.getElementById('ticTacBoard').children[0].children;
		var row;
		var column;
		for(var i = 0; i < 3; i++) {
			row = board[i].children;
			for(var j = 0; j < 3; j++) {
				column = row[j];
				column.innerHTML = boardNow[i][j];
			};
		};
	}
};

// controller reads from dom (mostly)
var controller = {
	// controller stuff	
	// connects to the dom and calls the model and view
	play: function(box) {
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		model.updateData(box, row, column);
		var boardNow = model.readBoardState();
		view.populateBoard(boardNow); 
	},
};
