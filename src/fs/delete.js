import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const folderPath = path.resolve(__dirname, './files');
  const filePath = path.join(folderPath, 'fileToRemove.txt');

  try {
    await fs.rm(filePath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
