// Build script: compiles all JSX files into a single JS bundle using @babel/standalone
var fs = require('fs');
var vm = require('vm');

// Load babel standalone
var babelSrc = fs.readFileSync('vendor/babel.min.js', 'utf8');
var sandbox = { window: {}, document: { createElement: function() { return {}; } }, console: console, navigator: { userAgent: 'node' } };
vm.createContext(sandbox);
vm.runInContext(babelSrc, sandbox);
var Babel = sandbox.Babel || sandbox.window.Babel;

// Files in dependency order
var files = [
  'js/icons.jsx',
  'js/data.jsx',
  'js/common.jsx',
  'js/invoice-pdf.jsx',
  'js/invoice-editor.jsx',
  'js/page-generate.jsx',
  'js/page-stores.jsx',
  'js/page-history.jsx',
  'js/store-detail.jsx',
  'js/app.jsx'
];

var combined = files.map(function(f) {
  var src = fs.readFileSync(f, 'utf8');
  // Strip Object.assign(window,...) lines — the bundle handles scope natively
  return src;
}).join('\n;\n');

var result = Babel.transform(combined, { presets: ['react'] });
fs.writeFileSync('js/bundle.js', result.code);
console.log('Built js/bundle.js (' + result.code.length + ' bytes)');
