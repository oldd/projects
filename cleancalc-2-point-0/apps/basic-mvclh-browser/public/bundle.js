(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var model = require('../../components/models/model-from-mvclh-markdown');
var view = require('../../components/views/view-from-mvclh-markdown');
var controller = require('../../components/controllers/controller-from-mvclh-markdown');
var logic = require('../../components/logic/logic-from-mvclh-markdown');
var handler = require('../../components/handlers/handler-from-mvclh-markdown');

controller.model = model;
controller.view = view;
controller.logc = logic;
handler.controller = controller;

window.onload = function () {
    var addButton = document.getElementById("addButton");
    addButton.onclick = function () {
        handler.add();
    };
};

},{"../../components/controllers/controller-from-mvclh-markdown":2,"../../components/handlers/handler-from-mvclh-markdown":3,"../../components/logic/logic-from-mvclh-markdown":4,"../../components/models/model-from-mvclh-markdown":5,"../../components/views/view-from-mvclh-markdown":6}],2:[function(require,module,exports){
"use strict";

var controller = {
    model: {},
    view: {},
    logic: {},
    add: function add(a, b) {
        var lastResult = this.model.getlastResult();
        var result = this.logic.add(a, b, lastResult);
        this.model.setLastResult(result);
        this.view.render(result);
    }
};

module.exports = controller;

},{}],3:[function(require,module,exports){
"use strict";

var handler = {
    controller: {},
    add: function add() {
        var a; // to tell the difference between no number and 0
        var pre_a = document.getElementById("number1").value;
        if (pre_a == '') {
            a = undefined; // try Number('') to see why I do this
        } else {
            a = Number(pre_a);
        };

        var b;
        var pre_b = document.getElementById("number2").value;
        if (pre_b == '') {
            b = undefined;
        } else {
            b = Number(pre_b);
        }

        this.controller.add(a, b);

        document.getElementById("number1").innerHTML = null;
        document.getElementById("number2").innerHTML = null;
    }
};

module.exports = handler;

},{}],4:[function(require,module,exports){
"use strict";

var logic = {
    add: function add(a, b, lastResult) {
        var result = 0;
        if (a && b) {
            result = a + b;
        } else if (a) {
            result = a + lastResult;
        } else if (b) {
            result = b + lastResult;
        } else {
            result = lastResult;
        }
        return result;
    }
};

module.exports = logic;

},{}],5:[function(require,module,exports){
"use strict";

var model = {
    lastResult: 0,
    setLastResult: function setLastResult(new_last_result) {
        this.lastResult = new_last_result;
    },
    getLastResult: function getLastResult() {
        return this.lastResult;
    }
};

module.exports = model;

},{}],6:[function(require,module,exports){
"use strict";

var view = {
    render: function render(result) {
        document.getElementById("output").innerHTML = result;
    }
};

module.exports = view;

},{}]},{},[1]);
