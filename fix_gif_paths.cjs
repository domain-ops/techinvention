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
        // Fix the Vite base path issue by adding /techinvention/ to the path
        content = content.replace(/const (\w+) = "\/TechInvention-gif\.gif";/g, 'const $1 = "/techinvention/TechInvention-gif.gif";');
        fs.writeFileSync(fullPath, content);
    }
}
console.log('Fixed Vite base paths for the gif!');
