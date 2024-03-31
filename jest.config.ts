import type { Config } from "jest";

const config: Config = {
  modulePathIgnorePatterns: ["<rootDir>/build/"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "mjs",
    "cjs",
    "jsx",
    "json",
    "node",
  ],
  testEnvironment: "jsdom",
};

export default config;
