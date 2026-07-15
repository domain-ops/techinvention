const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directories = [
    path.join(__dirname, 'public'),
    path.join(__dirname, 'src', 'assets', 'images')
];

async function processFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const stat = fs.statSync(filePath);
    // Ignore small icons and files under 50KB
    if (stat.size < 50 * 1024) return;

    // Skip gitignore or temp files
    if (filePath.includes('.git') || filePath.includes('.next')) return;

    console.log(`Processing: ${path.relative(__dirname, filePath)} (${(stat.size / 1024).toFixed(1)} KB)`);

    const tempPath = filePath + '.tmp';
    try {
        const image = sharp(filePath);
        const metadata = await image.metadata();

        let targetWidth = 1920;
        // If it's a portrait image, scale to max 1000px width
        if (metadata.width && metadata.height && metadata.height > metadata.width) {
            targetWidth = 1000;
        }

        let pipeline = image;
        if (metadata.width && metadata.width > targetWidth) {
            pipeline = pipeline.resize({ width: targetWidth, withoutEnlargement: true });
        }

        if (ext === '.png') {
            // PNG highly optimized compression (palette enabled)
            await pipeline
                .png({ quality: 75, compressionLevel: 9, palette: true })
                .toFile(tempPath);
        } else {
            // JPEG progressive compression using mozjpeg settings
            await pipeline
                .jpeg({ quality: 75, progressive: true, mozjpeg: true })
                .toFile(tempPath);
        }

        const tempStat = fs.statSync(tempPath);
        if (tempStat.size < stat.size) {
            fs.unlinkSync(filePath);
            fs.renameSync(tempPath, filePath);
            console.log(`  -> Optimized to: ${(tempStat.size / 1024).toFixed(1)} KB (Saved: ${((stat.size - tempStat.size) / 1024).toFixed(1)} KB / ${((1 - tempStat.size / stat.size) * 100).toFixed(0)}%)`);
        } else {
            console.log(`  -> Original was already smaller than compressed output.`);
            fs.unlinkSync(tempPath);
        }
    } catch (err) {
        console.error(`Error processing ${filePath}:`, err);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
}

async function scanDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await scanDirectory(fullPath);
        } else if (entry.isFile()) {
            await processFile(fullPath);
        }
    }
}

async function run() {
    for (const dir of directories) {
        if (fs.existsSync(dir)) {
            console.log(`Scanning: ${dir}`);
            await scanDirectory(dir);
        }
    }
    console.log("All image optimizations complete!");
}

run();
