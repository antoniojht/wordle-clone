const RULES = {
  OFF: 'off',
  ERROR: 'error',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': RULES.OFF,
    'react/jsx-filename-extension': RULES.OFF,
    'react/no-array-index-key': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'no-param-reassign': RULES.OFF,
    'no-unused-vars': RULES.OFF,
  },
};
