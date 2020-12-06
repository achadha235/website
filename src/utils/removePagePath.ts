const pagePath = './src/pages';

function removePathPath(path) {
  return path.replace(pagePath, '').replace('.mdx', '');
}

export default removePathPath;
