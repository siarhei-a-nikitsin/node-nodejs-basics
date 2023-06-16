import { cpus } from "node:os";
import { resolve } from "node:path";
import {
  Worker,
  MessageChannel,
  MessagePort,
  isMainThread,
  parentPort,
} from "node:worker_threads";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const statusMap = new Map([
  ["fulfilled", "resolved"],
  ["rejected", "error"],
]);

const promisifyWorker = (worker) =>
  new Promise((resolve, reject) => {
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });

const performCalculations = async () => {
  const coreCount = cpus().length;

  const workerFilePath = resolve(__dirname, "worker.js");

  const workers = [];

  for (let i = 0, fibNum = 10; i < coreCount; i++, fibNum++) {
    const worker = promisifyWorker(
      new Worker(workerFilePath, {
        workerData: fibNum,
      })
    );

    workers.push(worker);
  }

  const fibNumbers = await Promise.allSettled(workers);

  const result = fibNumbers.map(({ status, value }) => ({
    status: statusMap.get(status),
    data: value ?? null,
  }));

  console.log(result);
};

await performCalculations();
