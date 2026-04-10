const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/Home/sections/JourneyPipeline/index.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Phase 1 (Orange) -> Green
content = content.replace(/#FFA400/g, '#5C7625');

// Phase 2 (Yellow) -> Lighter Green
content = content.replace(/#FFD100/g, '#87A840');
// Remove black text for Phase 2, make it white
content = content.replace(/text-\[#333\]/g, 'text-white');
content = content.replace(/border-\[#333\]\/10/g, 'border-white/20');

// Phase 3 (Dark Blue) -> Lighter Blue 
content = content.replace(/#17438E/g, '#2065B3');
content = content.replace(/#15428F/g, '#2065B3');

// Phase 4 (Purple) -> Primary Blue
content = content.replace(/#D136B0/g, '#1755A6');
content = content.replace(/#8B45B5/g, '#1755A6');
content = content.replace(/#9747FF/g, '#1755A6');

// Save it back
fs.writeFileSync(filePath, content, 'utf-8');
console.log('Replaced colors successfully!');
