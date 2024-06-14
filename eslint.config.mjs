import globals from "globals";
import pluginJs from "@eslint/js";
import { defineConfig } from "eslint-define-config";

export default defineConfig([
    { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
]);
