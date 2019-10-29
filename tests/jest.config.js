module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  rootDir: '..',
  roots: ['<rootDir>/src'],
  globalSetup: '<rootDir>/tests/jest.setup.js',
  globalTeardown: '<rootDir>/tests/jest.teardown.js',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.timeout.js'],
  moduleFileExtensions: ['js', 'ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
};
