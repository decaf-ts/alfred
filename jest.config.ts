import { pathsToModuleNameMapper } from "ts-jest";

const paths = {
  "@utils/*": ["src/utils/*"],
  "@constants/*": ["src/constants/*"],
};

module.exports = {
  verbose: true,
  transform: { "^.+\\.ts?$": "ts-jest" },
  testEnvironment: "node",
  testRegex: "/tests/.*\\.(test|spec)\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  coverageDirectory: "./workdocs/coverage",
  moduleNameMapper: pathsToModuleNameMapper(paths, {
    prefix: "<rootDir>/",
  }),
  collectCoverageFrom: ["src/**/*.{ts,jsx}"],
  coveragePathIgnorePatterns: ["/node_modules/", "src/cli"],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 100,
      lines: 80,
      statements: 90,
    },
  },
  coverageReporters: ["json-summary", "text-summary", "text", "html"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./workdocs/coverage",
        outputName: "junit-report.xml",
      },
    ],
  ],
};
