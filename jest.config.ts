import type { Config } from "jest";
import nextJest from "next/jest.js";
import { compilerOptions } from "./tsconfig.json";
import { pathsToModuleNameMapper } from "ts-jest";

const createJestConfig = nextJest({
    dir: "./",
});

const config: Config = {
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    roots: ["<rootDir>"],
    modulePaths: ["<rootDir>"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};

export default createJestConfig(config);
