import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";
import { defineConfig } from "eslint-define-config";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: { 
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    ignores: ["node_modules/", "dist/"],
    rules: {
      "no-var": "error",
      "camelcase": ["error", { properties: "always" }],
      "no-unused-vars": "warn",
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "no-trailing-spaces": "error",
      "max-len": ["error", { code: 500 }],
      "no-undef": "off",
    },
  },
  {
    files: ["**/*.test.js"],
    plugins: {
      jest: pluginJest,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
  pluginJs.configs.recommended,
]);
