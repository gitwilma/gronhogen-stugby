import { promises as fs } from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  cottages: {
    path: "public/assets/cottages",
    maxWidth: 1920,
    quality: 78,
    pattern: /cottages_\d+\.webp$/,
  },
  cottagesBooking: {
    path: "public/assets/cottagesBooking",
    maxWidth: 1200,
    quality: 78,
    pattern: /cottagesBooking_\d+\.webp$/,
  },
  nature: {
    path: "public/assets/nature",
    maxWidth: 1600,
    quality: 78,
    pattern: /\.(webp|jpg|jpeg)$/i,
  },
};

// Get file size in KB
async function getFileSize(filePath) {
  const stats = await fs.stat(filePath);
  return (stats.size / 1024).toFixed(2);
}

// Optimize single image
async function optimizeImage(filePath, maxWidth, quality) {
  const originalSize = await getFileSize(filePath);

  // Load image
  const image = sharp(filePath);
  const metadata = await image.metadata();

  // Skip if already smaller than target
  if (metadata.width <= maxWidth) {
    console.log(`[SKIP] ${path.basename(filePath)} (already optimized)`);
    return { skipped: true };
  }

  // Create backup
  const backupPath = filePath.replace(/\.(webp|jpg|jpeg)$/i, ".backup.$1");
  await fs.copyFile(filePath, backupPath);

  // Resize and optimize
  await image
    .resize(maxWidth, null, {
      withoutEnlargement: true,
      fit: "inside",
    })
    .webp({ quality })
    .toFile(filePath + ".tmp");

  // Replace original
  await fs.unlink(filePath);
  await fs.rename(filePath + ".tmp", filePath);

  const newSize = await getFileSize(filePath);
  const saved = (originalSize - newSize).toFixed(2);
  const savedPercent = ((saved / originalSize) * 100).toFixed(1);

  return {
    skipped: false,
    originalSize,
    newSize,
    saved,
    savedPercent,
  };
}

// Process folder
async function processFolder(folderConfig) {
  const folderPath = path.join(__dirname, "..", folderConfig.path);

  console.log(`\nProcessing: ${folderConfig.path}`);
  console.log(
    `   Max width: ${folderConfig.maxWidth}px, Quality: ${folderConfig.quality}%`,
  );

  try {
    const files = await fs.readdir(folderPath);
    const imageFiles = files.filter((file) => folderConfig.pattern.test(file));

    let totalOriginal = 0;
    let totalNew = 0;
    let processedCount = 0;
    let skippedCount = 0;

    for (const file of imageFiles) {
      const filePath = path.join(folderPath, file);

      try {
        const result = await optimizeImage(
          filePath,
          folderConfig.maxWidth,
          folderConfig.quality,
        );

        if (result.skipped) {
          skippedCount++;
        } else {
          console.log(
            `[OK] ${file}: ${result.originalSize} KB -> ${result.newSize} KB (saved ${result.saved} KB / ${result.savedPercent}%)`,
          );
          totalOriginal += parseFloat(result.originalSize);
          totalNew += parseFloat(result.newSize);
          processedCount++;
        }
      } catch (error) {
        console.error(`[ERROR] Error processing ${file}:`, error.message);
      }
    }

    if (processedCount > 0) {
      const totalSaved = (totalOriginal - totalNew).toFixed(2);
      const totalPercent = ((totalSaved / totalOriginal) * 100).toFixed(1);

      console.log(`\nSummary for ${folderConfig.path}:`);
      console.log(`   Processed: ${processedCount} images`);
      console.log(`   Skipped: ${skippedCount} images`);
      console.log(`   Original total: ${totalOriginal.toFixed(2)} KB`);
      console.log(`   New total: ${totalNew.toFixed(2)} KB`);
      console.log(`   Total saved: ${totalSaved} KB (${totalPercent}%)`);
    }
  } catch (error) {
    console.error(`[ERROR] Error reading folder ${folderPath}:`, error.message);
  }
}

// Main function
async function main() {
  console.log("Image Optimization Script");
  console.log("================================\n");
  console.log(
    "Note: Original files will be backed up with .backup extension\n",
  );

  const startTime = Date.now();

  // Process each folder
  await processFolder(config.cottages);
  await processFolder(config.cottagesBooking);
  await processFolder(config.nature);

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log("\nDone! Total time:", duration, "seconds");
  console.log("\nNext steps:");
  console.log('   - Run "npm run build" to rebuild your site');
  console.log("   - Test in Lighthouse to see improvements");
  console.log(
    "   - Delete .backup files when satisfied: rm public/assets/**/*.backup.*",
  );
}

main().catch(console.error);
