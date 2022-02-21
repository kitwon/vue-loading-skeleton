module.exports = {
  root: true,
  env: {
    node: true
  },
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  extends: [
    "@vue/typescript/recommended",
    'plugin:vue/vue3-recommended',
    "prettier"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'comma-dangle': ['error', 'never']
  }
};
