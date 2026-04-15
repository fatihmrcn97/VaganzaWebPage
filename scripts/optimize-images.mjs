/**
 * Image optimization script for Vaganza
 * Converts large JPG/PNG images to optimized WebP format
 * Preserves originals, creates WebP versions alongside them
 * 
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = './public';
const VAGANZA_PHOTOS_DIR = './public/VaganzaPhotos';

// Only optimize files larger than this threshold (in bytes)
const SIZE_THRESHOLD = 500 * 1024; // 500KB

// Quality settings - high quality to preserve visual fidelity
const WEBP_QUALITY = 82;
const MAX_WIDTH = 2400; // Max width for hero backgrounds
const MAX_WIDTH_CARD = 1600; // Max width for card images

// Files that are used as hero backgrounds (need larger size)
const HERO_BG_FILES = ['1V6A2226', 'noManSlider2Bg'];

async function getImageFiles(dir) {
  const files = [];
  try {
    const entries = await readdir(dir);
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const s = await stat(fullPath);
      if (s.isDirectory()) {
        const subFiles = await getImageFiles(fullPath);
        files.push(...subFiles);
      } else if (/\.(jpg|jpeg|png)$/i.test(entry) && s.size > SIZE_THRESHOLD) {
        files.push({ path: fullPath, name: entry, size: s.size });
      }
    }
  } catch (e) {
    // Directory may not exist
  }
  return files;
}

function getMaxWidth(filename) {
  const base = basename(filename, extname(filename));
  return HERO_BG_FILES.some(h => base.includes(h)) ? MAX_WIDTH : MAX_WIDTH_CARD;
}

async function optimizeImage(file) {
  const ext = extname(file.name);
  const webpPath = file.path.replace(ext, '.webp');
  const maxW = getMaxWidth(file.name);
  
  try {
    const metadata = await sharp(file.path).metadata();
    const needsResize = metadata.width > maxW;
    
    let pipeline = sharp(file.path);
    
    if (needsResize) {
      pipeline = pipeline.resize(maxW, null, { 
        withoutEnlargement: true,
        fit: 'inside',
      });
    }
    
    const result = await pipeline
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(webpPath);
    
    const originalMB = (file.size / (1024 * 1024)).toFixed(2);
    const optimizedMB = (result.size / (1024 * 1024)).toFixed(2);
    const reduction = ((1 - result.size / file.size) * 100).toFixed(1);
    
    console.log(`✓ ${file.name}`);
    console.log(`  ${originalMB} MB → ${optimizedMB} MB (${reduction}% smaller)`);
    console.log(`  ${metadata.width}x${metadata.height} → ${result.width}x${result.height}`);
    console.log('');
    
    return { original: file.size, optimized: result.size };
  } catch (e) {
    console.error(`✗ Failed: ${file.name} - ${e.message}`);
    return { original: file.size, optimized: file.size };
  }
}

async function main() {
  console.log('🖼  Vaganza Image Optimizer');
  console.log('─'.repeat(50));
  console.log(`Quality: ${WEBP_QUALITY} | Max hero width: ${MAX_WIDTH}px | Max card width: ${MAX_WIDTH_CARD}px`);
  console.log('');
  
  const files = await getImageFiles(PUBLIC_DIR);
  
  if (files.length === 0) {
    console.log('No images found above size threshold.');
    return;
  }
  
  console.log(`Found ${files.length} images to optimize:\n`);
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const file of files) {
    const result = await optimizeImage(file);
    totalOriginal += result.original;
    totalOptimized += result.optimized;
  }
  
  console.log('─'.repeat(50));
  console.log(`Total: ${(totalOriginal / (1024 * 1024)).toFixed(1)} MB → ${(totalOptimized / (1024 * 1024)).toFixed(1)} MB`);
  console.log(`Overall reduction: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
}

main().catch(console.error);
