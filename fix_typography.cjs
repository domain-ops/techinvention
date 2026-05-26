const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src/pages').concat(walk('./src/components'));

let h2Replaced = 0;
let pReplaced = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // This regex looks for combinations of text sizing that span responsive breakpoints
    // For titles (which typically go up to 3xl/4xl/5xl):
    content = content.replace(/(?:text-(?:xl|2xl|3xl|4xl|5xl|\[.*?\])\s*)+(?:(?:sm|md|lg|xl|2xl):text-(?:xl|2xl|3xl|4xl|5xl|\[.*?\])\s*)+/g, match => {
        if (match.includes('4xl') || match.includes('3xl') || match.includes('5xl') || match.includes('36px')) {
            h2Replaced++;
            return 'text-[36px] ';
        }
        return match;
    });
    
    // For paragraphs (which typically go up to base/lg/xl):
    content = content.replace(/(?:text-(?:sm|base|lg|xl|\[.*?\])\s*)+(?:(?:sm|md|lg|xl|2xl):text-(?:sm|base|lg|xl|\[.*?\])\s*)+/g, match => {
        // Exclude if it looks like a title that we missed
        if (match.includes('3xl') || match.includes('4xl') || match.includes('5xl') || match.includes('36px')) {
            return match;
        }
        pReplaced++;
        return 'text-[18px] ';
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});

console.log(`Replaced ${h2Replaced} title sizes and ${pReplaced} paragraph sizes.`);
