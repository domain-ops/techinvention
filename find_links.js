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

walkDir('c:\\Users\\AAA RENTAL LLP\\Downloads\\techinvention\\src', (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    // regex to find <Link ... >
    const linkRegex = /<Link\s+([^>]+)>/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
        const props = match[1];
        if (!props.includes('href=')) {
            console.log(`Found <Link> without href in ${filePath}:`, match[0]);
        }
    }
});
