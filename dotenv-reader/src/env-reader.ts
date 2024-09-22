type GetEnvKey = {
  (key: string): string | undefined;
  <T extends string | number | boolean = string>(
    key: string,
    validator: (value: unknown) => value is T
  ): T | undefined;
};

export const get: GetEnvKey = <
  T extends "string" | "number" | "boolean" = "string"
>(
  key: string,
  validator?: (input: unknown) => input is T
): string | T | undefined => {
  if (!validator && typeof process.env[key] === "string") {
    return process.env[key];
  }
  if (validator && validator(process.env[key])) {
    return process.env[key];
  }

  throw new Error("Could not obtain the expected type!");
};
