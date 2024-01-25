import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const throwCustomError = () => {
  throw new Error('FS operation failed');
};

const create = async () => {
  const content = 'I am fresh and young';
  const filePath = path.resolve(__dirname, './files/fresh.txt');

  try {
    await fs.access(filePath, fs.constants.F_OK);
    throwCustomError();
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throwCustomError();
    }
  }

  await fs.writeFile(filePath, content);
};

await create();
