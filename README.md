[![npm version](https://badge.fury.io/js/%40tanooki%2Feslint-config.svg)](https://badge.fury.io/js/%40tanooki%2Feslint-config)

# Tanooki ESLint Config

https://www.npmjs.com/package/eslint-config-tanooki

## Setup for non-React projects

1.  Install the dependencies: `yarn add @tanooki/eslint-config prettier eslint babel-eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier`
2.  Update your `.eslintrc.js` file to extend the configuration:

    ```
    module.exports = {
      parser: 'babel-eslint',
      env: {
        browser: true,
        es6: true,
      },
      extends: ['@tanooki'],
      plugins: [],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      rules: {},
    }
    ```

3.  Additionally, add a corresponding `.prettierrc` file:

    ```
    {
      "printWidth": 100,
      "singleQuote": true,
      "trailingComma": "all",
      "semi": false
    }
    ```

## Setup for React projects

1.  Follow the instructions for non-React projects
2.  Add the following dependencies: `yarn add eslint-plugin-react-hooks eslint-plugin-react-hooks`
3.  Update your `.eslintrc.js` to extend the React config instead of the default config.

    ```
      // ...
      // REMOVE:  extends: ['@tanooki'],
      extends: [''@tanooki/eslint-config/react'],
      // ...
    ```
