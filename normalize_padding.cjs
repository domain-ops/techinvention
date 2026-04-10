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

    // We only want to target the primary <section ... className="..."> tag.
    // So we match the first <section block in the file.
    const sectionRegex = /<section\s+([^>]*className=["'])([^"']*)(["'][^>]*)>/i;
    const match = content.match(sectionRegex);

    if (match) {
        let className = match[2];
        
        // Remove existing padding top/bottom and vertical padding classes
        // matches py-*, pt-*, pb-* with any responsive prefix (sm:, md:, lg:, xl:, 2xl:)
        const paddingRegex = /\b(?:sm:|md:|lg:|xl:|2xl:)?(py|pt|pb)-(\d+|\[.*?\])\b/g;
        className = className.replace(paddingRegex, '').replace(/\s+/g, ' ').trim();

        // Add our normalized padding
        className = `py-16 md:py-20 ${className}`;

        const newSectionTag = `<section ${match[1]}${className}${match[3]}>`;
        content = content.replace(sectionRegex, newSectionTag);
    }

    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
        console.log(`Updated padding in: ${path.relative(__dirname, file)}`);
    }
}

console.log(`Done! Normalized padding in ${changedFiles} section files.`);
