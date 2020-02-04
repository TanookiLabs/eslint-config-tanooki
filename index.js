module.exports = {
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier", "import"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        semi: false
      }
    ],
    "no-unused-vars": "warn",
    "import/no-default-export": "error",
    "import/prefer-default-export": "off"
  }
};
