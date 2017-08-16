(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var app = {
	datAxios: {},
	dimension: 3,
	play: function play(box) {
		var _this = this;

		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		this.datAxios.get('/getNextPlayer') // axios call to get next player
		.then(function (response) {
			return _this.datAxios.post('/addMove', { // axios call to place move
				data: {
					row: row,
					column: column,
					player: response.data.nextPlayer
				}
			});
		}).then(function (response) {
			if (response.data.success) {
				return _this.datAxios.get('/getBoardState'); // axios call to get board
			} else {
				alert(response.data.error);
			}
		}).then(function (response) {
			app.repopulateBoard(response.data.boardState);
		}).then(function (response) {
			return _this.datAxios.post('/togglePlayer'); // axios call to switch player
		}).catch(function (error) {
			if (error) {
				console.log(error);
			}
		});
	},
	repopulateBoard: function repopulateBoard(newBoardState) {
		var board = document.getElementById('ticTacBoard').children[0].children;
		var row;
		var column;
		for (var i = 0; i < this.dimension; i++) {
			row = board[i].children;
			for (var j = 0; j < this.dimension; j++) {
				column = row[j];
				column.innerHTML = newBoardState[i][j];
			};
		};
	},
	initialize: function initialize() {
		console.log('hi');
		this.datAxios = axios.create({
			baseURL: 'http://localhost:3001'
		});
		var dimension = 3; // hardcoding it
		this.datAxios.post('/buildBoard', { data: { boardDimension: dimension } }) // axios call to build board with dimension
		.then(function (response) {
			console.log('board built');
		}).catch(function (error) {
			console.log(error);
		});
		var firstPlayer = true;
		this.datAxios.post('/setFirstPlayer', { data: { playerState: true } }) // axios call to initialize player
		.then(function (response) {
			console.log('player set');
		}).catch(function (error) {
			console.log(error);
		});
		this.buildBoard(this.dimension); // build view board
	},
	buildBoard: function buildBoard() {
		var board = document.getElementById('ticTacBoard');
		var row;
		var cell;
		for (var i = 0; i < this.dimension; i++) {
			row = board.insertRow(i);
			row.setAttribute('row', i);
			for (var j = 0; j < this.dimension; j++) {
				cell = row.insertCell(j);
				cell.innerHTML = null;
				cell.setAttribute('column', j);
				cell.setAttribute('onclick', 'app.play(this)');
			};
		};
	}
};

},{}]},{},[1]);
