import * as reader from "./env-reader.js";
import dotenv from "dotenv";

export default {
  loadEnvFile: dotenv.config,
  get: reader.get
};
