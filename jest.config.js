module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
};
