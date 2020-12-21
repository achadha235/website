import { Typography } from '@material-ui/core';
import Image from 'next/image';
import CodeBlock from 'src/components/CodeBlock';
import { List, ListItem } from '@material-ui/core';

export default {
  img: ({ src, alt }) => (
    <Image
      src={src}
      layout={alt.split('.')[0]}
      width={alt.split('.')[1]}
      height={alt.split('.')[2]}
    />
  ),
  h1: ({ children }) => <Typography variant='h1'>{children}</Typography>,
  h2: ({ children }) => <Typography variant='h2'>{children}</Typography>,
  h3: ({ children }) => <Typography variant='h3'>{children}</Typography>,
  h4: ({ children }) => <Typography variant='h4'>{children}</Typography>,
  h5: ({ children }) => <Typography variant='h5'>{children}</Typography>,
  p: ({ children }) => (
    <Typography variant='body1' className='leading-loose'>
      {children}
    </Typography>
  ),
  code: CodeBlock,
  ul: ({ children }) => (
    <List>
      {children.map((child) => (
        <ListItem>
          <Typography variant='body1' className='leading-loose'>
            {child}
          </Typography>
        </ListItem>
      ))}
    </List>
  ),
  inlineCode: ({ children }) => (
    <code className='bg-gray-900 p-1'>{children}</code>
  ),
};
