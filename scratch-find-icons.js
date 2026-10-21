const fs = require('fs');
const html = fs.readFileSync('home2 - Tanot Solutions.html', 'utf8');
const iconMatches = html.match(/<link[^>]+rel=["'](?:icon|shortcut icon|apple-touch-icon)[^>]*>/gi);
console.log('Icon matches:', iconMatches);
