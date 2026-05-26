const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
        } catch (err) {
            if (err.code === 'ENOENT' || err.code === 'EPERM' || err.code === 'EACCES') return;
            throw err;
        }
    });
    return filelist;
};

const srcDir = path.join(__dirname, 'src', 'pages', 'Home', 'sections');
const files = walkSync(srcDir).filter(f => f.endsWith('.tsx'));

let changedFiles = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    content = content.replace(/w-36 sm:w-44 lg:w-56/g, "w-28 sm:w-32 lg:w-44");

    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
        console.log(`Updated logo size in: ${path.relative(__dirname, file)}`);
    }
}

console.log(`Done! Logo shrank slightly in ${changedFiles} files.`);
