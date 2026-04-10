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

const replacements = [
    // H2s
    { from: "text-3xl sm:text-4xl md:text-5xl lg:text-5xl", to: "text-2xl sm:text-3xl md:text-4xl lg:text-4xl" },
    { from: "text-4xl md:text-5xl", to: "text-3xl md:text-4xl" },
    { from: "text-3xl sm:text-4xl md:text-5xl", to: "text-2xl sm:text-3xl md:text-4xl" },
    { from: "text-3xl md:text-4xl", to: "text-2xl md:text-3xl" },
    
    // Paragraphs / Descriptions
    { from: "text-lg md:text-xl lg:text-[1.35rem]", to: "text-base md:text-lg lg:text-xl" },
    { from: "text-lg md:text-xl", to: "text-base md:text-lg" },
    { from: "text-black text-lg", to: "text-black text-base md:text-lg" },
    { from: "text-base md:text-lg leading-relaxed", to: "text-sm md:text-base leading-relaxed" },
    { from: "text-lg leading-relaxed", to: "text-base md:text-lg leading-relaxed" },
    { from: "text-white/95 text-base md:text-lg", to: "text-white/95 text-sm md:text-base" },
    { from: "text-black max-w-2xl mx-auto md:mx-0 text-lg", to: "text-black max-w-2xl mx-auto md:mx-0 text-base md:text-lg" }
];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    for (const r of replacements) {
        const regex = new RegExp(r.from.replace(/[.*+?^${}()|[\]\\\\]/g, '\\\\$&'), 'g');
        content = content.replace(regex, r.to);
    }

    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
        console.log(`Updated: ${path.relative(__dirname, file)}`);
    }
}

console.log(`Done! Updated ${changedFiles} files with smaller typography.`);
