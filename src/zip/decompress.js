import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'url';
import fs from 'node:fs/promises';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compressedFile = path.join(__dirname, 'files', 'archive.gz');
const decompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  const readStream = createReadStream(compressedFile);
  const writeStream = createWriteStream(decompressedFile);
  const gunzip = createGunzip();
  readStream.pipe(gunzip).pipe(writeStream);
  await fs.rm(compressedFile);
};

await decompress();
