import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const throwCustomError = () => {
  throw new Error('FS operation failed');
};

const copy = async () => {
  const folderPath = path.resolve(__dirname, './files');
  const copyFolderPath = path.resolve(__dirname, './files_copy');

  try {
    await fs.access(folderPath, fs.constants.F_OK);
  } catch (error) {
    throwCustomError();
  }

  try {
    await fs.access(copyFolderPath, fs.constants.F_OK);
    throwCustomError();
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throwCustomError();
    }
  }

  await fs.mkdir(copyFolderPath, { recursive: true });

  const files = await fs.readdir(folderPath);
  files.map(async (file) => {
    const filePath = path.join(folderPath, file);
    const copyFilePath = path.join(copyFolderPath, file);
    await fs.copyFile(filePath, copyFilePath);
  });
};

await copy();
