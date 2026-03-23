const fs = require('fs');
fs.rmSync('node_modules/.cache/gh-pages', { recursive: true, force: true });
console.log('Cache cleared');
