// doesn't quite work.  fix it

var model = require('../../components/models/model-from-mvclh-markdown');
var view = require('../../components/views/view-from-mvclh-markdown');
var controller = require('../../components/controllers/controller-from-mvclh-markdown');
var logic = require('../../components/logics/logic-from-mvclh-markdown');
var handler = require('../../components/handlers/handler-from-mvclh-markdown');

controller.model = model;
controller.view = view;
controller.logc = logic;
handler.controller = controller;

window.onload = function() {
    var addButton = document.getElementById("addButton");
    addButton.onclick = function() {
        handler.add();
    };
};