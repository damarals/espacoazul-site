/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next/core-web-vitals",
    "@rocketseat/eslint-config/react",
    "plugin:storybook/recommended"
  ],
  rules: {
    camelcase: ['error', { allow: ['unstable_'] }],
  },
}

module.exports = config
