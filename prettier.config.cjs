/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
module.exports = {
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@local/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/constants/(.*)$',
    '^@/atoms/(.*)$',
    '^@/components/(.*)$',
    '^@/hooks/(.*)$',
    '^@/utils/(.*)$',
    '^@/types/(.*)$',
    '^@/styles/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  overrides: [
    {
      files: ['**/**'],
      options: {
        plugins: [
          require.resolve('@ianvs/prettier-plugin-sort-imports'),
          'prettier-plugin-tailwindcss',
        ],
      },
    },
  ],
}
