import { parentPort, workerData } from 'worker_threads'

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  const nthFibonacciResult = nthFibonacci(workerData.n);
  const message = { nthFibonacciResult: nthFibonacciResult };

  parentPort.postMessage(message);
};

sendResult();
