import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesPath = path.join(__dirname, 'files');
const fileToRead = path.join(filesPath, 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const readStream = fs.createReadStream(fileToRead);
  const hash = crypto.createHash('sha256');

  return new Promise((resolve, reject) => {
    readStream.pipe(hash);
    readStream.on('end', () => {
      const hexHash = hash.digest('hex');
      console.log(hexHash);
      resolve();
    });
  })
};

await calculateHash();
