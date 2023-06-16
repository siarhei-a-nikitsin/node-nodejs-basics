import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { writeFile } from "node:fs/promises";

import { isFileExists } from "./utils/index.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const create = async () => {
  const fileName = resolve(__dirname, "files/fresh.txt");

  const isExists = await isFileExists(fileName);

  if (isExists) {
    throw new Error("FS operation failed");
  }

  return writeFile(fileName, "I am fresh and young");
};

// test
await create();
