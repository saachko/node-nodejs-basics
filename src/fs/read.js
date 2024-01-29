import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const folderPath = path.resolve(__dirname, './files');
  const filePath = path.join(folderPath, 'fileToRead.txt');

  try {
    await fs.access(filePath, fs.constants.F_OK);
    const fileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
    console.log(fileContent);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
