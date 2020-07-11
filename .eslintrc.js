module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    //"no-console": 0,
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
