import { Jimp } from 'jimp';

async function upscaleImage(inputPath, outputPath) {
    try {
        console.log(`Reading ${inputPath}...`);
        const image = await Jimp.read(inputPath);
        
        // Resize by 4x using bicubic interpolation
        const newWidth = image.bitmap.width * 4;
        const newHeight = image.bitmap.height * 4;
        
        image.resize({ w: newWidth, h: newHeight }); 
        
        // Apply slight contrast and sharpen (convolute) to reduce blurriness
        image.contrast(0.05);
        image.convolute([
            [0, -1, 0],
            [-1, 5, -1],
            [0, -1, 0]
        ]);
        
        await image.write(outputPath);
        console.log(`Successfully upscaled ${inputPath} to ${newWidth}x${newHeight}`);
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
