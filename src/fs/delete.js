import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { unlink } from "node:fs/promises";

import { isFileExists } from "./utils/index.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
  const fileName = "fileToRemove.txt";

  const filePath = resolve(__dirname, "files", fileName);

  const exists = await isFileExists(filePath);

  if (!exists) {
    throw new Error("FS operation failed");
  }

  return unlink(filePath);
};

// test
await remove();
