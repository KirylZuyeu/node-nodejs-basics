import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { rm } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesPath = path.join(__dirname, 'files');
const fileToRemove = path.join(filesPath, 'fileToRemove.txt');
const errorMessage = 'FS operation failed';

const remove = async () => {
    fs.access(fileToRemove, async function (error) {
    if (!error) {
      await rm(fileToRemove);
    } else {
      throw new Error(errorMessage);
    }
  });
};

await remove();
