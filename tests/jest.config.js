module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  rootDir: '..',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/tests/jest.timeout.js'],
  moduleFileExtensions: ['js', 'ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
};
