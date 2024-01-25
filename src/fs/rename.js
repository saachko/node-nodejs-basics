import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const throwCustomError = () => {
  throw new Error('FS operation failed');
};

const rename = async () => {
  const folderPath = path.resolve(__dirname, './files');
  const wrongFile = path.join(folderPath, 'wrongFilename.txt');
  const properFile = path.join(folderPath, 'properFilename.md');

  try {
    await fs.access(wrongFile, fs.constants.F_OK);
  } catch (error) {
    throwCustomError();
  }

  try {
    await fs.access(properFile, fs.constants.F_OK);
    throwCustomError();
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throwCustomError();
    }
  }

  await fs.rename(wrongFile, properFile);
};

await rename();
