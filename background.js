chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('html/index.html', {
    'state': 'maximized'
  });
});