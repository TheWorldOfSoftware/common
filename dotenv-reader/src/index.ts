import dotenv, {
  type DotenvConfigOptions,
  type DotenvParseOutput,
} from "dotenv";

interface EnvSchema {
  parse: (output: Readonly<DotenvParseOutput | undefined>) => void;
}

function loadEnv(options?: DotenvConfigOptions): DotenvParseOutput | undefined;
function loadEnv(
  schema: EnvSchema,
  options?: DotenvConfigOptions,
): DotenvParseOutput | undefined;
function loadEnv(
  optionsOrSchema?: Readonly<EnvSchema> | DotenvConfigOptions,
  options?: DotenvConfigOptions,
): DotenvParseOutput | undefined {
  const dotenvOptions =
    optionsOrSchema === undefined || !("parse" in optionsOrSchema)
      ? optionsOrSchema
      : options;
  const schema =
    optionsOrSchema === undefined || "parse" in optionsOrSchema
      ? optionsOrSchema
      : undefined;

  const result = dotenv.config(dotenvOptions);
  if (result.error) {
    throw new Error(`Failed to load .env file: ${result.error.message}`);
  }
  schema?.parse(result.parsed);
  return result.parsed;
}

export default {
  load: loadEnv,
};
