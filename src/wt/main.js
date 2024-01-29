import os from 'os';
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerFile = path.join(__dirname, 'worker.js');
const cpuNumber = os.cpus().length;

const performCalculations = async () => {
  const promiseArr = Array.from({ length: cpuNumber }, (_, index) => {
    const startNumber = 10 + index;
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerFile);
      worker.postMessage(startNumber);
      worker.on('message', (result) =>
        resolve({ status: 'resolved', data: result })
      );
      worker.on('error', (error) =>
        reject({ status: 'error', data: error.message })
      );
    });
  });

  const resultArr = await Promise.allSettled(promiseArr);
  console.log(resultArr.map((result) => result.value));
};

await performCalculations();
