/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  trailingComma: "es5",
  singleQuote: false,
  jsxSingleQuote: false,
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "auto",
  plugins: ["prettier-plugin-tailwindcss"],
};
