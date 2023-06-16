import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const compress = async () => {
  const filePath = resolve(__dirname, "files", "fileToCompress.txt");
  const compressedFilePath = resolve(__dirname, "files", "archive.gz");

  const fileReadStream = createReadStream(filePath);
  const fileWriteStream = createWriteStream(compressedFilePath);

  const gzip = createGzip();

  return pipeline(fileReadStream, gzip, fileWriteStream);
};

await compress();
