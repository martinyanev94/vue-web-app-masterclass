module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  rules: {
    'vue/no-unused-vars': 'warn',
    'vue/require-v-for-key': 'warn',
  },
};
