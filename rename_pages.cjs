const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, 'src', 'app');
const srcPagesDir = path.join(__dirname, 'src', 'pages');
const srcViewsDir = path.join(__dirname, 'src', 'views');

// 1. Rename the directory
if (fs.existsSync(srcPagesDir)) {
    fs.renameSync(srcPagesDir, srcViewsDir);
    console.log('Renamed src/pages to src/views');
}

// 2. Update imports in src/app
function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, callback);
        } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
            callback(dirPath);
        }
    });
}

let modifiedFiles = 0;
walkDir(srcAppDir, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/from\s+['"]([^'"]*?\/)pages\//g, "from '$1views/");
    
    // Also handle cases like '../pages/Home' (no trailing slash)
    newContent = newContent.replace(/from\s+['"]([^'"]*?\/)pages(['"])/g, "from '$1views$2");

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated imports in ${filePath}`);
        modifiedFiles++;
    }
});

console.log(`Successfully updated ${modifiedFiles} files.`);
