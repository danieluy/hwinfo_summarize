"use strict";

var file = require('./file');
var parser = require('./parser');
var output = require('./output');
var btn_open_file = document.getElementById('btn-open-file');
var btn_minimize_window = document.getElementById('btn-minimize-window');
var btn_close_window = document.getElementById('btn-close-window');
var btn_save_file = document.getElementById('btn-save-file');
var btn_display_info = document.getElementById('btn-display-info');

var cache = {
  input: null
}

function onFileOpen(data) {
    cache.input = parser.parseFile(data);
    output.renderFile(cache.input);
}

function onFileSaved(){
  messageHandler('File Saved');
}

function messageHandler(message) {
  console.log(message);
}

function errorHandler(err) {
  console.error(err.stack ? err.stack : err);
}

function closeWindow() {
  chrome.app.window.current().close();
}

function minimizeWindow() {
  chrome.app.window.current().minimize();
}

function displayInfo(){
  output.renderInfo(require('./modal_template.js'));
}

// Event listeners
btn_open_file.addEventListener('click', file.openFile.bind(null, onFileOpen, errorHandler));
btn_minimize_window.addEventListener('click', minimizeWindow);
btn_close_window.addEventListener('click', closeWindow);
// Can't bind output.stringifyDOM to cache.input because at binding time cache.input is null
btn_save_file.addEventListener('click', function () {
  file.saveFile(cache.input.name, output.stringifyNode(cache.input), onFileSaved, errorHandler);
});
btn_display_info.addEventListener('click', displayInfo);
document.addEventListener('DOMContentLoaded', displayInfo);