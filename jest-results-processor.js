
module.exports = function(results) {
  require('fs').writeFileSync('/tmp/jest-capture.json', JSON.stringify({
    success: results.success,
    numTotalTestSuites: results.numTotalTestSuites,
    numPassedTestSuites: results.numPassedTestSuites,
    numFailedTestSuites: results.numFailedTestSuites,
    numTotalTests: results.numTotalTests,
    numPassedTests: results.numPassedTests,
    numFailedTests: results.numFailedTests,
    suites: results.testResults.map(r => ({
      file: r.testFilePath,
      status: r.status,
      message: r.failureMessage || '',
      tests: r.testResults.map(t => ({
        name: t.fullName,
        status: t.status,
        failureMessages: t.failureMessages,
      })),
    })),
  }, null, 2));
  return results;
};
