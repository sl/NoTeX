var PREVIEW_DELAY = 300;

var shiftDown = false;
var setShiftDown = function (e) {
  if (e.keyCode === 16 || e.charCode === 16) {
    shiftDown = true;
  }
};

var setShiftUp = function (e) {
  if (e.keyCode === 16 || e.charCode === 16) {
    shiftDown = false;
  }
};

window.addEventListener? document.addEventListener('keydown', setShiftDown) :
  document.attachEvent('keydown', setShiftDown);
window.addEventListener? document.addEventListener('keyup', setShiftUp) :
  document.attachEvent('keyup', setShiftUp);

var editor = ace.edit('editor');
editor.setTheme('ace/theme/dawn');

editor.commands.addCommand({
  name: 'new equation',
  bindKey: { win: 'Shift+Enter', mac: 'Shift+Enter' },
  exec: function(editor) {
    editor.insert('\n$ ');
  }
});

var session = editor.getSession();

session.setMode('ace/mode/latex');
session.setUseWrapMode(true);
session.setWrapLimitRange(70,80);

var previewTimeout = null;

var previousLength = session.getDocument().getLength();
var previousContent = session.getDocument().getValue();

// Update preview on change event
session.on('change', function(e) {
  var docLength = session.getDocument().getLength();
  if (docLength !== previousLength) {
    updatePreview();
    previousLength = docLength;
  } else {
    if (previewTimeout !== null) {
      clearTimeout(previewTimeout);
    }
    previewTimeout = setTimeout(updatePreview, PREVIEW_DELAY)
  }
});

function updatePreview() {
  var doc = session.getDocument();
  var content = doc.getValue();
  if (content === previousContent) {
    return;
  }
  previousContent = content;
  var lines = doc.getLines(0, doc.getLength());
  var sections = partition(lines);
  var preview = document.getElementById('preview');
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }
  for (var i = 0; i < sections.length; ++i) {
    try {
      var type = sections[i].type;
      var content = sections[i].content;
      var contentDiv = document.createElement('div');
      contentDiv.setAttribute('class', type === "math" ? "notex" : type);
      if (type === 'markdown') {
        contentDiv.innerHTML = marked(content);
      } else {
        var latexBody = content;
        if (type === 'math') {
          // todo -- set latexBody to compiled notex equation
          latexBody = "COMPILED NOTEX: " + content;
        }
        contentDiv.innerHTML = latexBody;
      }
      if (i === 0) {
        contentDiv.style.marginTop = '6em';
      }
      if (i === sections.length - 1) {
        contentDiv.style.marginBottom = '6em';
      }
      preview.appendChild(contentDiv);
      if (type !== 'markdown' && /* todo -- remove */ type !== 'math') {
        // todo -- render latex
      }
    } catch (e) {
      contentDiv.innerHTML = content;
      error = document.createElement('div');
      error.innerHTML = e.message;
      contentDiv.appendChild(error);
      contentDiv.setAttribute('class','error');
    }
  }
}

function partition(lines) {
  var sections = [];
  var currentSection = 'markdown';
  var buffer = '';
  for (var i = 0; i < lines.length; ++i) {
    var matches = /^\\(math|latex|end)$/.exec(lines[i]);
    if (matches !== null) {
      var type = matches[1];
      if (currentSection === 'markdown') {
        if (type === 'end') continue;
        if (buffer !== '') {
          sections.push({
            type: currentSection,
            content: buffer
          });
          buffer = '';
        }
        currentSection = type;
      } else if (type === 'end') {
        if (buffer !== '') {
          sections.push({
            type: currentSection,
            content: buffer
          });
          buffer = '';
        }
        currentSection = 'markdown';
      }
    } else {
      var initialBuffer = buffer;
      buffer += lines[i];
      if (currentSection === 'markdown') {
        if (lines[i].startsWith('$')) {
          sections.push({
            type: currentSection,
            content: initialBuffer
          });
          sections.push({
            type: 'math',
            content: lines[i].substr(1)
          });
          buffer = '';
        } else {
          buffer += ((i === lines.length - 1) ? '' : '\n');
          continue;
        }
      }
      if (currentSection === 'math') {
        sections.push({
          type: currentSection,
          content: buffer
        });
        buffer = '';
      }
    }
  }
  if (buffer !== null) {
    sections.push({
      type: currentSection,
      content: buffer
    });
  }
  return sections;
}
