module.exports = {
  extends: ["@tanooki", "prettier/react", "plugin:react/recommended"],
  plugins: ["react-hooks"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        semi: false
      }
    ],
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off"
  }
};
