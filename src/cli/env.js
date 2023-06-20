import { env } from "node:process";

const parseEnv = () => {
    const result = Object.keys(env).reduce((acc, key) => {
        if(key.startsWith("RSS_")) {
            acc.push(`${key}=${env[key]}`);
        }

        return acc;
    }, [])

    console.log(result.join("; "));
};

parseEnv();