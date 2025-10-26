import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesPath = path.join(__dirname, 'files');
const fileToWrite = path.join(filesPath, 'fileToWrite.txt');

const write = async () => {
  const writeStream = fs.createWriteStream(fileToWrite);
  process.stdin.on('data', (data) => {
    writeStream.write(data);
  });
};

await write();
