module.exports = {
  verbose: true,
  moduleFileExtensions: ["js"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  moduleNameMapper: {
    "@/([^\\.]*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
  coverageReporters: ["text-summary", "html", "json-summary"],
};
