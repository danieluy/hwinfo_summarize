chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create('window.html', {
    'innerBounds': {
      'width': 800,
      'height': 600
    },
    'resizable': false,
    'frame': 'none'
  });
});