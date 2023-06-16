import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createUnzip } from "node:zlib";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const decompress = async () => {
  const filePath = resolve(__dirname, "files", "fileToCompress.txt");
  const compressedFilePath = resolve(__dirname, "files", "archive.gz");

  const fileReadStream = createReadStream(compressedFilePath);
  const fileWriteStream = createWriteStream(filePath);

  const unzip = createUnzip();

  return pipeline(fileReadStream, unzip, fileWriteStream);
};

await decompress();
