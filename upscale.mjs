import { Jimp } from 'jimp';

async function upscaleImage(inputPath, outputPath) {
    try {
        console.log(`Reading ${inputPath}...`);
        const image = await Jimp.read(inputPath);
        
        // Resize by 4x using bicubic interpolation
        const newWidth = image.bitmap.width * 4;
        const newHeight = image.bitmap.height * 4;
        
        image.resize({ w: newWidth, h: newHeight }); // Jimp v1 resize syntax
        
        // A slight contrast/brightness bump to make it pop after upscaling
        image.contrast(0.05);
        
        await image.write(outputPath);
        console.log(`Successfully upscaled ${inputPath} to ${newWidth}x${newHeight}`);
    } catch (err) {
        console.error(`Error upscaling ${inputPath}:`, err);
    }
}

async function run() {
    await upscaleImage('src/assets/images/about-us-1.jpg', 'src/assets/images/about-us-1.jpg');
    await upscaleImage('src/assets/images/about-us-2.jpg', 'src/assets/images/about-us-2.jpg');
}

run();
