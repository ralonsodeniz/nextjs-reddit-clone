module.exports = {
  'src/**/*.{mjs,js,jsx,ts,tsx,mdx}': [
    'eslint --max-warnings=0 --format=pretty',
    'prettier --check',
  ],
  'src/**/*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit --pretty',
};
