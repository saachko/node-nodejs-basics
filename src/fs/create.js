import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const content = 'I am fresh and young';
  const filePath = path.resolve(__dirname, './files/fresh.txt');

  if (existsSync(filePath)) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.writeFile(filePath, content);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
