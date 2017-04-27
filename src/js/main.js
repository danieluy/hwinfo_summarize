"use strict";

var file = require('./file');
var parser = require('./parser');
var output = require('./output');
var btn_open_file = document.getElementById('btn-open-file');
var btn_minimize_window = document.getElementById('btn-minimize-window');
var btn_close_window = document.getElementById('btn-close-window');
var btn_save_file = document.getElementById('btn-save-file');

var cache = {
  input: null
}

function onFileOpen(data) {
  cache.input = parser.parseFile(data);
  output.renderFile(cache.input);
  console.log('onFileOpen', cache.input);
}

function displayMessage(message) {
  console.log();
}

function displayError(err) {
  console.error(err.stack ? err.stack : err);
}

function closeWindow() {
  chrome.app.window.current().close();
}

function minimizeWindow() {
  chrome.app.window.current().minimize();
}

// event listeners
btn_open_file.addEventListener('click', file.openFile.bind(null, onFileOpen, displayError));
btn_minimize_window.addEventListener('click', minimizeWindow);
btn_close_window.addEventListener('click', closeWindow);
// btn_save_file.addEventListener('click', file.saveFile.bind(null, 'File name', output.stringifyDOM(cache.input)));
btn_save_file.addEventListener('click', function () { // can't bind output.stringifyDOM to cache.input because at binding time cache.input is null
  output.stringifyDOM(cache.input);
});