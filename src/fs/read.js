import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesPath = path.join(__dirname, 'files');
const fileToReadPath = path.join(filesPath, 'fileToRead.txt');
const errorMessage = 'FS operation failed';

const read = async () => {
    fs.access(fileToReadPath, async (error) => {
    if (!error) {
      const fileContent = await fs.promises.readFile(fileToReadPath, 'utf8');
      console.log(fileContent);
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await read();
