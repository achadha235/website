const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './src/components/**/*.tsx',
      './src/components/**/*.mdx',
      './src/pages/**/*.tsx',
      './src/pages/**/*.mdx',
      './src/styles/**/*.scss',
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    purgecss,
    // ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
