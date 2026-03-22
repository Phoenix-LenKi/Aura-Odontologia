const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('input/site-scrape/pages/home.html', 'utf-8');
const $ = cheerio.load(html);

// Extact texts by sections roughly
const texts = [];
$('h1, h2, h3, h4, h5, p, span').each((i, el) => {
  const text = $(el).text().trim().replace(/\s+/g, ' ');
  if (text.length > 20 && !texts.includes(text)) {
    texts.push(text);
  }
});

// Extract colors from styles or text content (if wix puts them in vars)
// A common wix color pattern is rgb(...) or #hex
const colorsMatch = html.match(/#[a-fA-F0-9]{6}\b/g) || [];
const colorCounts = {};
colorsMatch.forEach(c => {
    const color = c.toLowerCase();
    colorCounts[color] = (colorCounts[color] || 0) + 1;
});
const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]).slice(0, 15);

fs.writeFileSync('extracted_content.json', JSON.stringify({
  colors: sortedColors,
  texts: texts
}, null, 2));

console.log("Extraction complete.");
