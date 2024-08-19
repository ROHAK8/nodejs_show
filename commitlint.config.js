// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat"]],
    "subject-case": [2, "always", "sentence-case"],
  },
};
