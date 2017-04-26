"use strict";

var file = require('./file');
var parser = require('./parser');
var output = require('./output');
var btn_open_file = document.getElementById('btn-open-file');
var btn_minimize_window = document.getElementById('btn-minimize-window');
var btn_close_window = document.getElementById('btn-close-window');

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

function closeWindow(){
  chrome.app.window.current().close();
}

function minimizeWindow(){
  chrome.app.window.current().minimize();
}

// event listeners
btn_open_file.addEventListener('click', file.openFile.bind(null, onFileOpen, displayError));
btn_minimize_window.addEventListener('click', minimizeWindow);
btn_close_window.addEventListener('click', closeWindow);