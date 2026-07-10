import { Jimp } from 'jimp';

async function upscaleImage(inputPath, outputPath) {
    try {
        console.log(`Reading ${inputPath}...`);
        const image = await Jimp.read(inputPath);
        
        // Target a reasonable high resolution, e.g., 1200px wide
        const targetWidth = 1200;
        
        // Only upscale if it's smaller than the target
        if (image.bitmap.width < targetWidth) {
            const ratio = targetWidth / image.bitmap.width;
            const newWidth = targetWidth;
            const newHeight = Math.round(image.bitmap.height * ratio);
            
            image.resize({ w: newWidth, h: newHeight }); 
            image.contrast(0.05); // Just a slight contrast bump
            await image.write(outputPath);
            console.log(`Successfully upscaled ${inputPath} to ${newWidth}x${newHeight}`);
        } else {
            console.log(`${inputPath} is already high resolution.`);
        }
    } catch (err) {
        console.error(`Error upscaling ${inputPath}:`, err);
    }
}

async function run() {
    await upscaleImage('src/assets/images/Syed-Sir.jpg', 'src/assets/images/Syed-Sir.jpg');
    await upscaleImage('src/assets/images/Nazneen-maam.jpg', 'src/assets/images/Nazneen-maam.jpg');
    await upscaleImage('src/assets/images/Monica-Thanvi.png', 'src/assets/images/Monica-Thanvi.png');
    await upscaleImage('src/assets/images/Gopal-Damisetti.jpg', 'src/assets/images/Gopal-Damisetti.jpg');
}

run();
