import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import { EOL } from "node:os";

const transform = async () => {
  const transform = new Transform({
    transform(chunk, _encoding, cb) {
      const parsedChunk = chunk.toString().trim();

      const reversedChunk = parsedChunk.toString().split("").reverse().join("");

      cb(null, reversedChunk + EOL);
    },
  });

  return pipeline(stdin, transform, stdout);
};

await transform();
