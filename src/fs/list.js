import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const folderPath = path.resolve(__dirname, './files');

  try {
    await fs.access(folderPath, fs.constants.F_OK);
    const files = await fs.readdir(folderPath);
    for (const file of files) console.log(file);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();
