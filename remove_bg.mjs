import { Jimp } from 'jimp';

async function removeBackground() {
    try {
        const image = await Jimp.read('src/assets/images/industry_factory.png');
        const width = image.bitmap.width;
        const height = image.bitmap.height;
        
        // Get the background color from the top-left pixel
        const bgColor = image.getPixelColor(0, 0);
        
        const threshold = 40; // Tolerance for color variation
        
        const bgR = (bgColor >> 24) & 255;
        const bgG = (bgColor >> 16) & 255;
        const bgB = (bgColor >> 8) & 255;
        
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                const pixelColor = image.getPixelColor(x, y);
                const r = (pixelColor >> 24) & 255;
                const g = (pixelColor >> 16) & 255;
                const b = (pixelColor >> 8) & 255;
                
                // If pixel color is close to background color, make it transparent
                if (Math.abs(r - bgR) < threshold && 
                    Math.abs(g - bgG) < threshold && 
                    Math.abs(b - bgB) < threshold) {
                    image.setPixelColor(0x00000000, x, y);
                }
            }
        }
        
        await image.write('src/assets/images/industry_factory.png');
        console.log('Background removed successfully!');
    } catch (err) {
        console.error(err);
    }
}

removeBackground();
