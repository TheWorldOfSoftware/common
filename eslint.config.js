import eslint from "@worldofsoftware/eslint-config";
import eslintTypescript from "@worldofsoftware/eslint-config-typescript";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";

const gitIgnorePath = path.resolve(import.meta.dirname, ".gitignore");

const configurations = [
  includeIgnoreFile(gitIgnorePath),
  eslint,
  eslintTypescript,
  {
    files: ["dotenv-reader/src/index.ts"],
    rules: {
      "@typescript-eslint/prefer-readonly-parameter-types": [
        "error",
        {
          allow: {
            from: "package",
            package: "dotenv",
            type: "DotenvConfigOptions",
          },
        },
      ],
    },
  },
];

export default configurations;
