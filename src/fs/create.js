import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const content = 'I am fresh and young';
  const filePath = path.resolve(__dirname, './files/fresh.txt');

  try {
    await fs.access(filePath, fs.constants.F_OK);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }

  await fs.writeFile(filePath, content);
};

await create();
