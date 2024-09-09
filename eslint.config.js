import globals from "globals"
import pluginJs from "@eslint/js"

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-use-before-define": "error",
    },
  },
  pluginJs.configs.recommended,
  // {
  // },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]
