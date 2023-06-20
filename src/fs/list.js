import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { readdir } from "node:fs/promises";

import { isFolderExists } from "./utils/index.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const list = async () => {
  const folderName = "files";

  const folderPath = resolve(__dirname, folderName);

  const folderExists = await isFolderExists(folderPath);

  if (!folderExists) {
    throw new Error("FS operation failed");
  }

  const list = await readdir(folderPath);

  console.log(list);
};

// test
await list();
