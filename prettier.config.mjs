/** @type {import("prettier").Config} */

const config = {
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-organize-imports'],
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
}

export default config
