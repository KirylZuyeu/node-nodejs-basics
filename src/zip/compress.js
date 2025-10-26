import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesPath = path.join(__dirname, 'files');
const fileToCompress = path.join(filesPath, 'fileToCompress.txt');
const archive =  path.join(filesPath, 'archive.gz');

const compress = async () => {
  const readStream = fs.createReadStream(fileToCompress, 'utf8');
  const writeStream = fs.createWriteStream(archive);
  const gzip = zlib.createGzip();
  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
