import { cpus } from 'os';
import path from 'path';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  const results = [];
  const workers = [];

  for (let cpu = 0; cpu < cpus().length; cpu++) {
    const workerPromise = new Promise((resolve, reject) => {
      const n = cpu + 10;
      const workerPath = path.join(process.cwd(), 'src/wt/worker.js');
      const worker = new Worker(workerPath, { workerData: { n: n } });

      worker.on('message', message => {
        results[cpu] = { status: 'resolved', data: message.nthFibonacciResult };

        resolve(message);
      });

      worker.on('error', error => {
        results[cpu] = { status: 'error', data: null };

        reject(error);
      });

      worker.on('exit', code => {
        if (code !== 0) {
          results[cpu] = { status: 'error', data: null };

          reject(code);
        }
      });
    });

    workers.push(workerPromise);
  }

  await Promise.allSettled(workers).then(() => console.log(results));
};

await performCalculations();
