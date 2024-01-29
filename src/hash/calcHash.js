import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const fileBuffer = await fs.readFile(file);
  const hex = createHash('SHA256').update(fileBuffer).digest('hex');
  console.log(hex);
};

await calculateHash();
