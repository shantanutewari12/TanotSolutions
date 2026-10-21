const fs = require('fs');
let c = fs.readFileSync('data/content.ts', 'utf8');

const MARKO_ROLE = "role: 'Marketing Manager, Hosting company',";
const ARRAY_END = '] as ReviewItem[],';

const markoEnd = c.indexOf(MARKO_ROLE) + MARKO_ROLE.length;
const reviewItemsEnd = c.indexOf(ARRAY_END, markoEnd);

if (markoEnd < MARKO_ROLE.length || reviewItemsEnd < 0) {
  console.error('Could not find markers. markoEnd:', markoEnd, 'reviewItemsEnd:', reviewItemsEnd);
  process.exit(1);
}

const between = c.slice(markoEnd, reviewItemsEnd);
console.log('Between segment (will be removed):', JSON.stringify(between));

// Replace the segment between Marko's role line and ] as ReviewItem[] with just proper closing
const newContent = c.slice(0, markoEnd) + '\n      },\n    ] as ReviewItem[],' + c.slice(reviewItemsEnd + ARRAY_END.length);
fs.writeFileSync('data/content.ts', newContent);
console.log('Done. Removed Lisa Warren card review entry.');
