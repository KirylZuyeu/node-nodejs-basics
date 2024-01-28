import { fileURLToPath } from 'url';
import {dirname, join} from 'path'
import fsPromises from "fs/promises";
const { access, writeFile } = fsPromises;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathForFile = join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
        await access(pathForFile);
        const err = new Error('FS operation failed');
        console.error(err.message);
    } catch (error) {
        await writeFile(pathForFile, 'I am fresh and young')
        console.log('File has been created');
    }
};

await create();
