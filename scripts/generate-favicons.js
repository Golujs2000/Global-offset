import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const gLogoPath = path.resolve('src/assets/Layered Paper G Logo.png');

async function processIcons() {
  console.log('🖼️ Processing Layered Paper G Logo & favicons...');

  // 1. Direct copy of original file to favicon.png
  fs.copyFileSync(gLogoPath, 'public/favicon.png');

  // 2. Generate trimmed transparent version for BrandLogo
  const gLogoTrimmed = sharp(gLogoPath).trim();
  const trimmedBuffer = await gLogoTrimmed.toBuffer();

  await sharp(trimmedBuffer).png().toFile('public/layered-paper-g-logo.png');
  await sharp(trimmedBuffer).webp({ quality: 95 }).toFile('public/layered-paper-g-logo.webp');
  console.log('✓ Created public/layered-paper-g-logo.png & .webp');

  // 3. Generate square canvas with 5% padding for favicon and touch icons
  const metadata = await sharp(trimmedBuffer).metadata();
  const maxDim = Math.max(metadata.width, metadata.height);
  const pad = Math.round(maxDim * 0.05);
  const canvasSize = maxDim + pad * 2;

  const squareBuffer = await sharp(trimmedBuffer)
    .extend({
      top: Math.round((canvasSize - metadata.height) / 2),
      bottom: Math.round((canvasSize - metadata.height) / 2),
      left: Math.round((canvasSize - metadata.width) / 2),
      right: Math.round((canvasSize - metadata.width) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp(squareBuffer).resize(32, 32).png().toFile('public/favicon-32x32.png');
  await sharp(squareBuffer).resize(16, 16).png().toFile('public/favicon-16x16.png');
  await sharp(squareBuffer).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  await sharp(squareBuffer).resize(512, 512).png().toFile('public/android-chrome-512x512.png');
  await sharp(squareBuffer).resize(192, 192).png().toFile('public/android-chrome-192x192.png');

  // Multi-size compatible .ico file
  const icoHeader = Buffer.alloc(22);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // icon type
  icoHeader.writeUInt16LE(1, 4); // 1 image
  icoHeader.writeUInt8(0, 6);   // 256px
  icoHeader.writeUInt8(0, 7);   // 256px
  icoHeader.writeUInt8(0, 8);   // colors
  icoHeader.writeUInt8(0, 9);   // reserved
  icoHeader.writeUInt16LE(1, 10); // color planes
  icoHeader.writeUInt16LE(32, 12); // bpp
  icoHeader.writeUInt32LE(squareBuffer.length, 14); // image size
  icoHeader.writeUInt32LE(22, 18); // offset

  const icoBuffer = Buffer.concat([icoHeader, squareBuffer]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);

  // SVG wrapper containing the exact Layered Paper G Logo
  const base64Png = squareBuffer.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <image href="data:image/png;base64,${base64Png}" width="256" height="256"/>
</svg>`;
  fs.writeFileSync('public/favicon.svg', svgContent, 'utf-8');
  console.log('✓ All favicons generated from Layered Paper G Logo (ICO, PNG, SVG, Apple Touch)');

  console.log('🎉 Logo & Favicons generated successfully!');
}

processIcons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
