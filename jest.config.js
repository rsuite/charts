module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc-node/jest',
      {
        react: {
          runtime: 'automatic',
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transformIgnorePatterns: ['/node_modules/(?!echarts|zrender)'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svg.js',
  },
};
