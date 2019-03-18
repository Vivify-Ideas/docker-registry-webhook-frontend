module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/prettier"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-undef": 0,
    "no-unused-vars": ["off"],
    "prettier/prettier": {
      "quotes": ["error", "single"]
    }
  },
  plugins: [
    "typescript"
  ],
  parserOptions: {
    "parser": "typescript-eslint-parser",
    // parser: "babel-eslint",
    // ecmaFeatures: {
    //   legacyDecorators: true
    // }
  },
};
