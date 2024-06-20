const fs = require("fs");

try {
  // Read Jest results from jest-results.json
  const jestResults = JSON.parse(fs.readFileSync("jest-results.json", "utf8"));

  // Extract relevant data
  const { numPassedTests, numTotalTests } = jestResults;
  const passRate = (numPassedTests / numTotalTests) * 100;

  console.log(`Current test pass rate: ${passRate.toFixed(2)}%`);

  // Check pass rate condition (e.g., 80%)
  const PASS_RATE_THRESHOLD = 80;
  if (passRate >= PASS_RATE_THRESHOLD) {
    console.log("Tests passed successfully. Commit allowed.");
    process.exit(0); // Exit successfully
  } else {
    console.error(
      `Test pass rate is too low: ${passRate.toFixed(2)}%. Commit blocked.`
    );
    process.exit(1); // Exit with error status
  }
} catch (error) {
  console.error("Error reading Jest results or calculating pass rate:", error);
  process.exit(1); // Exit with error status
}
