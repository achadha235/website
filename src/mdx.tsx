import { Typography } from '@material-ui/core';
import Image from 'next/image';
import CodeBlock from 'src/components/CodeBlock';

export default {
  img: Image,
  h1: ({ children }) => <Typography variant='h1'>{children}</Typography>,
  h2: ({ children }) => <Typography variant='h2'>{children}</Typography>,
  h3: ({ children }) => <Typography variant='h3'>{children}</Typography>,
  h4: ({ children }) => <Typography variant='h4'>{children}</Typography>,
  h5: ({ children }) => <Typography variant='h5'>{children}</Typography>,
  p: ({ children }) => <Typography variant='body1'>{children}</Typography>,
  code: CodeBlock,
  inlineCode: ({ children }) => (
    <code className='bg-gray-900 p-1'>{children}</code>
  ),
};
