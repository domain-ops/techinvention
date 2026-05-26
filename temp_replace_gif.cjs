const fs = require('fs');
const path = require('path');

const files = [
    'src/pages/Home/sections/About/index.tsx',
    'src/pages/Home/sections/VaccinePipeline/index.tsx',
    'src/pages/Home/sections/GlobalProjects/index.tsx',
    'src/components/SectionDNA/index.tsx',
    'src/components/Preloader/index.tsx',
    'src/components/FloatingDNA/index.tsx',
    'src/components/DNAHelixTransition/index.tsx'
];

for(const file of files) {
    const fullPath = path.join(__dirname, file);
    if(fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        // Replace imports of the PNG logos with a constant pointing to the new GIF in public folder
        content = content.replace(/import\s+(\w+)\s+from\s+['"][^'"]*(?:TechInvention Logo \(DNA\)\.png|dark_dna_logo_sharp\.png)['"];/g, 'const $1 = "/TechInvention-gif.gif";');
        fs.writeFileSync(fullPath, content);
    }
}
console.log('Replaced logo images with gif');
