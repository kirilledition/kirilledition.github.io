import sharp from 'sharp';
import path from 'path';

const inputImagePath = path.join(process.cwd(), 'public/images/original_portrait.jpg');
const outputImagePath = path.join(process.cwd(), 'public/images/compressed_portrait.webp');

async function convertImage() {
  try {
    await sharp(inputImagePath)
      .resize({ width: 512 })
      .webp({ quality: 90 })
      .toFile(outputImagePath);

    console.log('Successfully converted image to WebP format.');
  } catch (error) {
    console.error('Error converting image:', error);
  }
}

convertImage();
