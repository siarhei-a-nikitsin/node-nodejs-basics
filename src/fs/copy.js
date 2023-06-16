import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { cp } from "node:fs/promises";

import { isFolderExists } from "./utils/index.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const copy = async () => {
  const sourceFolder = resolve(__dirname, "files");
  const destinationFolder = resolve(__dirname, "files_copy");

  const [isSourceFolderExists, isDestinationFolderExists] = await Promise.all([
    isFolderExists(sourceFolder),
    isFolderExists(destinationFolder),
  ]);

  if (!isSourceFolderExists || isDestinationFolderExists) {
    throw new Error("FS operation failed");
  }

  return cp(sourceFolder, destinationFolder, { recursive: true });
};

// test
await copy();
