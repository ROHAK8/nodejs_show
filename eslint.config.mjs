import globals from "globals";
import pluginJs from "@eslint/js";
import { defineConfig } from "eslint-define-config";

export default defineConfig([
    {
        files: ["**/*.js"],
        languageOptions: { sourceType: "commonjs" },
        ignores: ["node_modules/", "dist/"],
    },
    {
        languageOptions: { globals: globals.browser },
        ignores: ["node_modules/", "dist/"],
    },
    pluginJs.configs.recommended,
]);
