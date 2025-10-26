import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesPath = path.join(__dirname, 'files');
const errorMessage = 'FS operation failed';

const list = async () => {
    fs.access(filesPath, async (error) => {
    if (!error) {
      const items = await fs.promises.readdir(filesPath, {withFileTypes: true});
      for (let item of items) {
        console.log(item.name);
      }
    } else {
      throw new Error(errorMessage);
    }
  });
};

await list();
