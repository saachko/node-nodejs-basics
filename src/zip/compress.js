import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
const compressedFile = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const readStream = createReadStream(fileToCompress);
  const writeStream = createWriteStream(compressedFile);
  const gzip = createGzip();
  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
