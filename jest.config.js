module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx',
          noUnusedLocals: false,
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transformIgnorePatterns: ['/node_modules/(?!recharts)'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svg.js',
  },
};
