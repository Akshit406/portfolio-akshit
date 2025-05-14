/** @type {import('jest').Config} */
module.exports = {
  // Indicates whether to use watch mode (for development)
  watch: true,

  // The root directory where Jest should search for tests
  rootDir: 'src',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Setup files that need to be run before tests are executed
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // You'll need to create this file

  // Module name mapping to ease testing
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock file imports
  },

  // Transform configuration
  transform: {
    // Use babel-jest to transform js/ts files
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'] }],
  },
  
  //Collect coverage
  collectCoverage: true,
  
  coverageReporters: ["html", "text-summary"],

  //Where should the coverage reports be generated
  coverageDirectory: 'coverage',
  
  //Set the module type to esm
  moduleType: 'module',
};
