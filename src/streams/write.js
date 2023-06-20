import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { createWriteStream } from "node:fs";
import { stdin } from "node:process";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const write = async () => {
  const fileName = "fileToWrite.txt";

  const filePath = resolve(__dirname, "files", fileName);

  const writeStream = createWriteStream(filePath);

  stdin.pipe(writeStream);
};

await write();
