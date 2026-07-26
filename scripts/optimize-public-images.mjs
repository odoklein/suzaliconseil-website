import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeImages() {
  console.log('🚀 Optimizing public images...');
  
  const files = [
    'public/images/Gemini_Generated_Image_7r0ynp7r0ynp7r0y (2).png',
    'public/images/team.png',
    'public/assets/hichem-hammouche.png',
    'public/assets/antoine-hallab.png',
    'public/assets/aurelia-bemer.png',
    'public/images/investissementlocatif.png',
    'public/images/velis.png',
    'public/images/zupdeco.png',
    'public/projects/ekozaliFondation.png',
    'public/projects/mobiService.png',
    'public/projects/zupdeco.jpg',
    'public/projects/investissementLocatif.png',
    'public/projects/neotrace.png',
  ];

  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const statsBefore = fs.statSync(file);
    const ext = path.extname(file).toLowerCase();
    const tempFile = file + '.tmp';

    try {
      let pipeline = sharp(file);
      const metadata = await pipeline.metadata();

      // Resize large images if width > 1200px
      if (metadata.width && metadata.width > 1200) {
        pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
      }

      if (ext === '.png') {
        await pipeline
          .png({ quality: 80, compressionLevel: 9, palette: true })
          .toFile(tempFile);
      } else if (ext === '.jpg' || ext === '.jpeg') {
        await pipeline
          .jpeg({ quality: 80, mozjpeg: true })
          .toFile(tempFile);
      }

      const statsAfter = fs.statSync(tempFile);
      fs.renameSync(tempFile, file);

      console.log(
        `Optimized ${file}: ${(statsBefore.size / 1024).toFixed(1)} KB -> ${(statsAfter.size / 1024).toFixed(1)} KB (-${(
          ((statsBefore.size - statsAfter.size) / statsBefore.size) *
          100
        ).toFixed(1)}%)`
      );
    } catch (err) {
      console.error(`Failed to optimize ${file}:`, err.message);
      if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
    }
  }
}

optimizeImages();
