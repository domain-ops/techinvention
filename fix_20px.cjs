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

const files = walk('./src');

let count = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace text-[20px] with text-[18px]
    content = content.replace(/text-\[20px\]/g, 'text-[18px]');
    
    // Also catch style={{ fontSize: '20px' }} just in case it's used
    content = content.replace(/fontSize:\s*['"]20px['"]/g, "fontSize: '18px'");

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
        count++;
    }
});

console.log(`Replaced text-[20px] in ${count} files.`);
