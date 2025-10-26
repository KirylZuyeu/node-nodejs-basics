import * as path from 'path';
import { fileURLToPath } from 'url';
import * as childProcess from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesPath = path.join(__dirname, 'files');
const script = path.join(filesPath, 'script.js');

const spawnChildProcess = async (args) => {
  const child = childProcess.fork(script, args);

  child.on('message', (data) => {
    process.stdout.write(`stdout: ${data}`);
  });
};

const args = process.argv.slice(2);

spawnChildProcess(args);
