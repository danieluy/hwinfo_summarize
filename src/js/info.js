"use strict";

var btn_close_info_window = document.getElementById('btn-close-info-window');

function closeWindow() {
  chrome.app.window.current().close();
}

// Event listeners
btn_close_info_window.addEventListener('click', closeWindow);