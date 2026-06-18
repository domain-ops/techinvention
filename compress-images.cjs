const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'src', 'assets', 'images');

async function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (stat.isFile()) {
            // Process images larger than 400KB
            if (stat.size > 400 * 1024 && (fullPath.endsWith('.jpg') || fullPath.endsWith('.jpeg') || fullPath.endsWith('.png'))) {
                console.log(`Compressing ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)...`);
                
                const tempPath = fullPath + '.tmp';
                try {
                    if (fullPath.endsWith('.png')) {
                        await sharp(fullPath).resize({ width: 1920, withoutEnlargement: true }).png({ quality: 75, compressionLevel: 8 }).toFile(tempPath);
                    } else {
                        await sharp(fullPath).resize({ width: 1920, withoutEnlargement: true }).jpeg({ quality: 75, progressive: true }).toFile(tempPath);
                    }
                    
                    fs.unlinkSync(fullPath);
                    fs.renameSync(tempPath, fullPath);
                    
                    const newStat = fs.statSync(fullPath);
                    console.log(`-> Reduced to ${(newStat.size / 1024).toFixed(2)} KB`);
                } catch (e) {
                    console.error(`Error processing ${file}:`, e);
                    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
                }
            }
        }
    }
}

processDirectory(dir).then(() => console.log('Compression complete!'));
