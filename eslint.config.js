import typescriptParser from "@typescript-eslint/parser";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default [
  reactRecommended,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            [
              "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
            ],
            ["^@?(?!components|core|pages|api|storage|utils|hooks)\\w"],
            ["^(@|@components|@core|@pages|@api|@storage|@utils|@hooks)"],
            [
              "^\\.\\.(?!/?$)",
              "^\\.\\./?$",
              "^\\u0000",
              "^\\./(?=.*/)(?!/?$)",
              "^\\.(?!/?$)",
              "^\\./?$",
            ],
            ["^.+\\.s?css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
];
