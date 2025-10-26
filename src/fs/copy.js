import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorMessage = 'FS operation failed';

const filesPath = path.join(__dirname, 'files');
const copyFilePath = path.join(__dirname, 'files_copy');

const copyDir = async (itemPath, copyItemPath) => {
  await fs.promises.mkdir(copyItemPath, {
    recursive: true
  });

  const items = await fs.promises.readdir(itemPath, { withFileTypes: true });

  for (let item of items) {
    const srcPath = path.join(itemPath, item.name);
    const destPath = path.join(copyItemPath, item.name);

    if (item.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.promises.copyFile(srcPath, destPath);
    }
  }
}

const copy = async () => {
    fs.access(copyFilePath, function (error) {
    if (error) {
      copyDir(filesPath, copyFilePath);
    } else {
      throw new Error(errorMessage);
    }
  });
};

await copy();
