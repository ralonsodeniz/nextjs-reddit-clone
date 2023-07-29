import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/(*.)+(spec|test).ts?(x)'],
  coverageDirectory: '<rootDir>/coverage',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/utils/test/setupTest.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/(*.)+(spec|test).ts?(x)'],
  verbose: true,
};

export default createJestConfig(config);
