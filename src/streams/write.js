import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const writeStream = fs.createWriteStream(fileToWrite, { flags: 'a' });
  process.stdin.on('data', (data) => writeStream.write(data));
};

await write();
