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

if (process.env.REACT === '17') {
  module.exports.moduleNameMapper = {
    ...module.exports.moduleNameMapper,
    '^react((\\/.*)?)$': 'react-17$1',
    '^react-dom((\\/.*)?)$': 'react-dom-17$1',
  };
}

if (process.env.REACT === '18') {
  module.exports.moduleNameMapper = {
    ...module.exports.moduleNameMapper,
    '^react((\\/.*)?)$': 'react-18$1',
    '^react-dom((\\/.*)?)$': 'react-dom-18$1',
  };
}
