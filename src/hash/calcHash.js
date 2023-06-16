import { resolve } from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
  const filePath = resolve(__dirname, "files/fileToCalculateHashFor.txt");

  const hash = createHash("sha256");

  const fileContent = await readFile(filePath, { encoding: "utf-8" });

  hash.update(fileContent);

  console.log(hash.digest("hex"));
};

await calculateHash();
