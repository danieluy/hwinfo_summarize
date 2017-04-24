"use strict";

var file = require('./file');
var parser = require('./parser');
var output = require('./output');
var btn_open_file = document.getElementById('btn-open-file');

function render(dom_string) {
  document.getElementById('output').textContent = dom_string;
}

function onFileOpen(data){
  var parsed = parser.parseFile(data);
  console.log(parsed);
  output.renderFile(parsed);
}

function displayError(err) {
  console.error(err.stack ? err.stack : err);
  render(err.message);
}

// event listeners
btn_open_file.addEventListener('click', file.openFile.bind(null, onFileOpen, displayError));