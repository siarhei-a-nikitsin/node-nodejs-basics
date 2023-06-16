import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { rename as fsRename } from "node:fs/promises";

import { isFileExists } from "./utils/index.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const rename = async () => {
  const wrongFileName = "wrongFilename.txt";
  const properFileName = "properFilename.md";

  const folderPath = resolve(__dirname, "files");

  const wrongFilePath = resolve(folderPath, wrongFileName);
  const properFilePath = resolve(folderPath, properFileName);

  const [isWrongFileExists, isProperFileExists] = await Promise.all([
    isFileExists(wrongFilePath),
    isFileExists(properFilePath),
  ]);

  if (!isWrongFileExists || isProperFileExists) {
    throw new Error("FS operation failed");
  }

  return fsRename(wrongFilePath, properFilePath);
};

// test
await rename();
