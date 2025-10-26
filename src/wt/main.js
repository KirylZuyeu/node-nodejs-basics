import * as worker from 'worker_threads';
import * as os from 'os';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerScript = path.join(__dirname, 'worker.js');
const count = os.cpus().length;

const performCalculations = async () => {

  const promises = [];

  for (let i = 1; i <= count; i++) {
    promises.push(new Promise((res, rej) => {
      const newWorker = new worker.Worker(workerScript, {
        workerData: 10 + i
      });
      newWorker.on('message', res);
      newWorker.on('error', rej);
    }));
  }

  await Promise.allSettled(promises).then((value) => {
    console.log(value);
  });
};

await performCalculations();
