# Tanooki ESLint Config

## Setup for non-React projects

1.  Install the dependencies: `yarn add eslint-config-tanooki prettier eslint babel-eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier`
2.  Update your `.eslintrc.js` file to extend the configuration:

    ```
    module.exports = {
      parser: 'babel-eslint',
      env: {
        browser: true,
        es6: true,
      },
      extends: ['tanooki'],
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
