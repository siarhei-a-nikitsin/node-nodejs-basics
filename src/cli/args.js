import { argv } from "node:process";

const parseArgs = () => {
  let result = [];

  let i = 2;

  while (i < argv.length) {
    const argName = argv[i++].slice(2);
    const argValue = argv[i++];

    result.push(`${argName} is ${argValue}`);
  }

  console.log(result.join(", "));
};

parseArgs();
