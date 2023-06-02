import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./", // provide the path to your Next app to load next.config.js and .env files in your test environment
});

// Add any custom config to be passed to Jest
/**
 * @type {import('jest').Config}
 */
const config = {
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(config);
