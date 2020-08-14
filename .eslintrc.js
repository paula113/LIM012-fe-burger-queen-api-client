module.exports = {
  env: {
<<<<<<< HEAD
    browser: true,
    es6: true,
=======
    es6: true,
    node: true,
>>>>>>> c1a514675b7e2255e9e9caa20abc12d88991a4a4
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
