import { resolve } from "node:path";
import { fork } from "node:child_process";
import { stdin, stdout } from "node:process";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

console.log(process.pid);

const spawnChildProcess = async (args) => {
  const filePath = resolve(__dirname, "files", "script.js");

  const childProcess = fork(filePath, args, {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });

  stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2"]);
