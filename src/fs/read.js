import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { readFile } from "node:fs/promises";

import { isFileExists } from "./utils/index.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const fileName = "fileToRead.txt";

  const filePath = resolve(__dirname, "files", fileName);

  const exists = await isFileExists(filePath);

  if (!exists) {
    throw new Error("FS operation failed");
  }

  const fileContent = await readFile(filePath, { encoding: "utf-8" });

  console.log(fileContent);
};

// test
await read();
