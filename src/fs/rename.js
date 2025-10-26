import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesPath = path.join(__dirname, 'files');
const wrongFilePath = path.join(filesPath, 'wrongFilename.txt');
const newFilePath = path.join(filesPath, 'properFilename.md');
const errorMessage = 'FS operation failed';

const rename = async () => {
  fs.access(wrongFilePath, function (error) {
    if (!error) {
      fs.promises.rename(wrongFilePath, newFilePath);
    } else {
      throw new Error(errorMessage);
    }
  });
};

await rename();
