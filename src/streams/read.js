import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const fileName = "fileToRead.txt";

  const filePath = resolve(__dirname, "files", fileName);

  const readStream = createReadStream(filePath);

  readStream.pipe(stdout);
};

await read();
