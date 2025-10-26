import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesPath = path.join(__dirname, 'files');
const archive =  path.join(filesPath, 'archive.gz');
const fileToDecompress = path.join(filesPath, 'fileToDecompress.txt');

const decompress = async () => {
  const readStream = fs.createReadStream(archive);
  const writeStream = fs.createWriteStream(fileToDecompress);
  const gunzip = zlib.createGunzip();
  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
