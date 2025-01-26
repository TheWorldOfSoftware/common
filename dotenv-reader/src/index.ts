import dotenv from "dotenv";

const get = (key: string): string => {
  if (!(key in process.env) || typeof process.env[key] !== "string") {
    throw new Error(
      `Key ${key} was not found in the env file. Did you spell it correctly?`
    );
  }

  return process.env[key];
};

export default {
  loadEnv: dotenv.config,
  get
};
