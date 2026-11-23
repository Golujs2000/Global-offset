import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const inputLogo = path.resolve('src/assets/Layered Paper G Logo.png');

async function makeFavicons() {
  console.log('Generating exact Layered Paper G Logo favicons...');

  // 1. Direct copy of original file to public/favicon.png and public/favicon-raw.png
  fs.copyFileSync(inputLogo, 'public/favicon.png');
  fs.copyFileSync(inputLogo, 'public/Layered-Paper-G-Logo.png');
  console.log('✓ Copied original to public/favicon.png and public/Layered-Paper-G-Logo.png');

  // 2. Create trimmed square versions for browser tab display
  const trimmed = await sharp(inputLogo).trim().toBuffer();
  const meta = await sharp(trimmed).metadata();
  const maxDim = Math.max(meta.width, meta.height);
  const pad = Math.round(maxDim * 0.05);
  const canvasSize = maxDim + pad * 2;

  const squareBuffer = await sharp(trimmed)
    .extend({
      top: Math.round((canvasSize - meta.height) / 2),
      bottom: Math.round((canvasSize - meta.height) / 2),
      left: Math.round((canvasSize - meta.width) / 2),
      right: Math.round((canvasSize - meta.width) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Save 32x32, 16x16, 180x180
  await sharp(squareBuffer).resize(32, 32).png().toFile('public/favicon-32x32.png');
  await sharp(squareBuffer).resize(16, 16).png().toFile('public/favicon-16x16.png');
  await sharp(squareBuffer).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  await sharp(squareBuffer).resize(512, 512).png().toFile('public/android-chrome-512x512.png');
  await sharp(squareBuffer).resize(192, 192).png().toFile('public/android-chrome-192x192.png');

  // 3. Generate valid .ico file containing the PNG icon
  const icoHeader = Buffer.alloc(22);
  // ICONDIR
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // icon type
  icoHeader.writeUInt16LE(1, 4); // 1 image
  // ICONDIRENTRY
  icoHeader.writeUInt8(0, 6);   // 256px width (0 = 256)
  icoHeader.writeUInt8(0, 7);   // 256px height (0 = 256)
  icoHeader.writeUInt8(0, 8);   // colors
  icoHeader.writeUInt8(0, 9);   // reserved
  icoHeader.writeUInt16LE(1, 10); // color planes
  icoHeader.writeUInt16LE(32, 12); // bpp
  icoHeader.writeUInt32LE(squareBuffer.length, 14); // image size
  icoHeader.writeUInt32LE(22, 18); // offset

  const icoBuffer = Buffer.concat([icoHeader, squareBuffer]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  console.log('✓ Created public/favicon.ico');

  // 4. Overwrite public/favicon.svg with SVG embedding the exact Layered Paper G Logo
  const base64Png = squareBuffer.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <image href="data:image/png;base64,${base64Png}" width="256" height="256"/>
</svg>`;
  fs.writeFileSync('public/favicon.svg', svgContent, 'utf-8');
  console.log('✓ Replaced public/favicon.svg with Layered Paper G Logo SVG wrapper');

  console.log('🎉 All favicon formats (PNG, ICO, SVG, Apple Touch) now use Layered Paper G Logo!');
}

makeFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
