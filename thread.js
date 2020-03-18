import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

const wasteTime = (delay) => {
  const end = Date.now() + delay;
  while (Date.now() < end) { }
};

if (isMainThread) {
  console.log('starting main thread');

  const worker = new Worker('./thread.js', { workerData: { delay: 2000 } });
  worker.on('message', msg => {
    console.log(`from worker thread ${msg}`);
  });

  worker.postMessage('hello!!');

  console.log('ending main thread');
} else {
  parentPort.on('message', msg => {
    console.log(`from main thread - ${msg}`);
  })
  parentPort.postMessage('starting');
  wasteTime(workerData.delay);
  parentPort.postMessage('in middle of thread');
  wasteTime(workerData.delay);
  parentPort.postMessage('all done');
}
