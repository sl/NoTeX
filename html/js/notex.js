var notexTokenizer = makeTokenizer({
  'whitespace': (/ | \t/),
  'escape': /\\(\(|\)|\\|[A-Za-z]+)/,
  'blockStart': /\(/,
  'blockEnd': /\)/,
  'special': /(->|=>|<-|<=|<==|==>)/,
  'keyword': /(int|sum|lim|\*|d|of|to)/,
  'expression': /([A-Za-z0-9<>=-]+)/,
});

function makeToken(type, value) {
  return {
    type: type,
    value: value
  };
}

function makeTokenizer(tokenInfo) {
  var tokenizer = {};
  tokenizer.tokenInfo = tokenInfo;
  tokenizer.tokenize = function(str) {
    var tokens = [];
    var remainingExpression = str;
    while (remainingExpression !== '') {
      var foundMatch = false;
      for (var property in this.tokenInfo) {
        if (this.tokenInfo.hasOwnProperty(property)) {
          if (remainingExpression.search(this.tokenInfo[property]) === 0) {
            var match = remainingExpression.match(this.tokenInfo[property]);
            remainingExpression = remainingExpression.replace(match[0], '');
            tokens.push(makeToken(property, match[1]));
            foundMatch = true;
            break;
          }
        }
      }
      if (!foundMatch) {
        return {
          tokens: tokens,
          errors: ['found no matching token for' + remainingExpression]
        };
      }
    }
    return {
      tokens: tokens,
      errors: []
    };
  };
  return tokenizer;
}

function parseNotex (str) {
  var tokens = notexTokenizer.tokenize(str);
  if (tokens.errors.length > 0) {
    return null
  }
  return parseNotexTokens(tokens.tokens);
}

function parseNotexTokens(tokens) {
  var parseTree = [];
  
}

function readUntil(tokens, type) {
  var argumentFlag = false;
  if (arguments.length >= 3 && arguments[2] !== null) {
    argumentFlag = true;
  }
  var ignoreWhitespace = arguments.length >= 4 && arguments[3];
  var res = [];
  while (tokens.length > 0 && !(tokens[0].type === type &&
    (!argumentFlag || arguments[2] === tokens[0].value))) {
    if (!ignoreWhitespace || tokens[0].type !== 'whitespace') {
      res.push(tokens[0]);
    }
    tokens.shift();
  }
  return res;
}

function testReadUntil() {
  var tokens = [{"type":"keyword","value":"int"},{"type":"whitespace"},{"type":"expression","value":"0"},{"type":"whitespace"},{"type":"keyword","value":"to"},{"type":"whitespace"},{"type":"expression","value":"1"},{"type":"whitespace"},{"type":"keyword","value":"of"},{"type":"whitespace"},{"type":"expression","value":"sin"},{"type":"whitespace"},{"type":"expression","value":"x"},{"type":"whitespace"},{"type":"keyword","value":"d"},{"type":"expression","value":"x"}];
  tokens.shift();
  console.log(readUntil(tokens, 'keyword', 'to', true));
  console.log(tokens.slice());
  console.log(readUntil(tokens, 'keyword', 'of', true));
  console.log(tokens.slice());
  console.log(readUntil(tokens, 'keyword', 'd', false));
  console.log(tokens.slice());
}

function compileNotex(str) {
  return compileParsedNotex(parseNotex(str));
}

function compileParsedNotex(p) {
  var line = '';
  while (p.length > 0) {
    var p = p[0]
    if (p[0].hasOwnProperty('parsed') && p[0].parsed) {
      if (p[0].type === 'int') {
        line += '\\int_{' + compileParsedNotex(p[0].from) + '}^{' +
          compileParsedNotex(p[0].to) + '} ' + compileParsedNotex(p[0].body) +
          ' \\, d' + p[0].diff + ' ';
      }
    } else {
      line += p[0].value;
    }
    p.shift();
  }
  return line;
}