const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory && f !== 'node_modules' && f !== '.next') {
            walkDir(dirPath, callback);
        } else if (!isDirectory && /\.(tsx|jsx|js|ts)$/.test(f)) {
            callback(dirPath);
        }
    });
}

let found = false;
walkDir('c:\\Users\\AAA RENTAL LLP\\Downloads\\techinvention\\src', (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    // More robust regex to find <Link ... > spanning multiple lines
    const linkRegex = /<Link\s+([\s\S]*?)>/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
        const props = match[1];
        if (!props.includes('href=') && !props.includes('href {')) {
            console.log(`Found <Link> without href in ${filePath}:\n${match[0]}\n`);
            found = true;
        }
    }
});

if (!found) {
    console.log("No <Link> without href found.");
}
