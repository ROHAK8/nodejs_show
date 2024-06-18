import globals from "globals";
import pluginJs from "@eslint/js";
import { defineConfig } from "eslint-define-config";

export default defineConfig([
    {
        files: ["**/*.js"],
        languageOptions: { sourceType: "commonjs" },
        ignores: ["node_modules/", "dist/"],
        rules: {
            // Custom rule example: disallow var, enforce let or const
            "no-var": "error",
            "camelcase": ["error", { properties: "always" }],
            "no-unused-vars": "warn",
            "indent": ["error", 4],
            "quotes": ["error", "double"],
            "no-trailing-spaces": "error",
            "max-len": ["error", { "code": 80 }]
        },
    },
    {
        languageOptions: { globals: globals.browser },
        ignores: ["node_modules/", "dist/"],
    },
    pluginJs.configs.recommended,
]);
